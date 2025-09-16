import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface WistiaVideoProps {
  videoId: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  onReady?: (video: any) => void;
}

declare global {
  interface Window {
    Wistia?: any;
    _wq?: any[];
  }
}

const WistiaVideo = ({ 
  videoId, 
  className = "", 
  autoplay = false, 
  muted = true,
  onReady 
}: WistiaVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    const loadWistiaScript = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="wistia.com/assets/external/E-v1.js"]')) {
        initializeVideo();
        return;
      }

      // Load Wistia script
      const script = document.createElement('script');
      script.src = 'https://fast.wistia.com/assets/external/E-v1.js';
      script.async = true;
      script.onload = () => {
        console.log('✅ Wistia script loaded successfully');
        if (mounted) {
          initializeVideo();
        }
      };
      script.onerror = () => {
        console.error('❌ Failed to load Wistia script');
        if (mounted) {
          setError('Failed to load Wistia player script');
        }
      };
      document.head.appendChild(script);
    };

    const initializeVideo = () => {
      // Initialize Wistia queue if not exists
      window._wq = window._wq || [];

      // Wait for Wistia to be available
      const checkWistia = () => {
        if (window.Wistia && containerRef.current) {
          console.log('🎥 Initializing Wistia video:', videoId);
          
          try {
            // Create video container
            const videoContainer = document.createElement('div');
            videoContainer.className = `wistia_embed wistia_async_${videoId}`;
            videoContainer.style.width = '100%';
            videoContainer.style.height = '100%';
            videoContainer.style.position = 'relative';
            
            // Add video options
            const videoOptions = {
              autoplay: autoplay,
              muted: muted,
              playsinline: true,
              controls: true,
              responsive: true
            };
            
            Object.entries(videoOptions).forEach(([key, value]) => {
              if (value !== undefined) {
                videoContainer.setAttribute(`data-wistia-${key}`, value.toString());
              }
            });

            // Clear container and append video
            if (containerRef.current) {
              containerRef.current.innerHTML = '';
              containerRef.current.appendChild(videoContainer);
            }

            // Initialize the video
            window._wq.push({
              id: videoId,
              onReady: (video: any) => {
                if (!mounted) return;
                
                console.log('🎬 Wistia video ready:', videoId);
                videoRef.current = video;
                setIsReady(true);
                setError(null);

                // Force resize to prevent black screen
                setTimeout(() => {
                  if (video && typeof video.resize === 'function') {
                    video.resize();
                    console.log('🔧 Video resized to prevent black screen');
                  }
                }, 100);

                // Call user callback
                if (onReady) {
                  onReady(video);
                }

                // Debug info
                console.log('📊 Video debug info:', {
                  state: video.state(),
                  dimensions: {
                    width: video.width(),
                    height: video.height()
                  },
                  container: containerRef.current
                });
              },
              onError: (error: any) => {
                console.error('❌ Wistia video error:', error);
                if (mounted) {
                  setError(`Video error: ${error.message || 'Unknown error'}`);
                }
              }
            });

            // Trigger Wistia initialization
            if (window.Wistia.initialize) {
              window.Wistia.initialize();
            }

          } catch (err) {
            console.error('❌ Error initializing Wistia video:', err);
            if (mounted) {
              setError(`Initialization error: ${err instanceof Error ? err.message : 'Unknown error'}`);
            }
          }
        } else {
          // Retry after a short delay
          setTimeout(checkWistia, 100);
        }
      };

      checkWistia();
    };

    loadWistiaScript();

    // Cleanup
    return () => {
      mounted = false;
      if (videoRef.current && typeof videoRef.current.remove === 'function') {
        videoRef.current.remove();
      }
    };
  }, [videoId, autoplay, muted, onReady]);

  if (error) {
    return (
      <div className={cn(
        "aspect-video w-full flex items-center justify-center",
        "bg-muted rounded-lg border border-border",
        className
      )}>
        <div className="text-center p-4">
          <p className="text-sm text-muted-foreground mb-2">Video Error</p>
          <p className="text-xs text-red-500">{error}</p>
          <button 
            className="mt-2 text-xs text-primary hover:underline"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("aspect-video w-full", className)}>
      <div
        ref={containerRef}
        className={cn(
          "w-full h-full relative overflow-hidden",
          // Safety CSS to prevent black screen
          "opacity-100 visible",
          // Ensure proper positioning
          "transform-none",
          // Prevent parent filters from affecting video
          "[&>*]:!filter-none [&>*]:!backdrop-filter-none",
          // Ensure iframe gets proper dimensions
          "[&_iframe]:w-full [&_iframe]:h-full [&_iframe]:absolute [&_iframe]:inset-0",
          "[&_.wistia_embed]:w-full [&_.wistia_embed]:h-full [&_.wistia_embed]:block"
        )}
        style={{
          // Force dimensions and visibility
          minHeight: '200px',
          backgroundColor: 'transparent',
          // Prevent common CSS issues
          transform: 'none',
          filter: 'none',
          backdropFilter: 'none'
        }}
      />
      
      {/* Loading state */}
      {!isReady && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            Loading video...
          </div>
        </div>
      )}
    </div>
  );
};

export default WistiaVideo;