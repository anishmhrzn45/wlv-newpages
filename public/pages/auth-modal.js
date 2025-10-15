// Authentication Modal for Static HTML Pages
class AuthModal {
  constructor() {
    this.modalHTML = `
      <div id="authModal" class="auth-modal-overlay" style="display: none;">
        <div class="auth-modal-content">
          <button class="auth-modal-close" onclick="closeAuthModal()">&times;</button>
          
          <div class="auth-modal-header">
            <h2>Login to WebLiveView</h2>
            <div class="auth-tabs">
              <button class="auth-tab active" onclick="switchAuthTab('login')">Login</button>
              <button class="auth-tab" onclick="switchAuthTab('signup')">Sign Up</button>
            </div>
          </div>

          <!-- Login Form -->
          <div id="loginForm" class="auth-form">
            <div class="auth-form-group">
              <label for="loginEmail">Email</label>
              <input type="email" id="loginEmail" placeholder="your@email.com" required>
            </div>
            
            <div class="auth-form-group">
              <label for="loginPassword">Password</label>
              <div class="password-input-wrapper">
                <input type="password" id="loginPassword" placeholder="••••••••" required>
                <button type="button" class="toggle-password" onclick="togglePasswordVisibility('loginPassword')">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="auth-forgot-password">
              <a href="#" onclick="alert('Please contact support to reset your password'); return false;">Forgot Password?</a>
            </div>

            <button class="auth-submit-btn" onclick="handleLogin()">Login</button>

            <div class="auth-divider">
              <span>or login with</span>
            </div>

            <div class="auth-social-buttons">
              <button class="auth-social-btn" onclick="handleSocialLogin('google')">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <button class="auth-social-btn" onclick="handleSocialLogin('linkedin')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Continue with LinkedIn
              </button>

              <button class="auth-social-btn" onclick="handleSocialLogin('facebook')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continue with Facebook
              </button>
            </div>
          </div>

          <!-- Sign Up Form -->
          <div id="signupForm" class="auth-form" style="display: none;">
            <div class="auth-form-row">
              <div class="auth-form-group">
                <label for="signupFirstName">First Name</label>
                <input type="text" id="signupFirstName" placeholder="John" required>
              </div>
              
              <div class="auth-form-group">
                <label for="signupLastName">Last Name</label>
                <input type="text" id="signupLastName" placeholder="Doe" required>
              </div>
            </div>

            <div class="auth-form-group">
              <label for="signupEmail">Email</label>
              <input type="email" id="signupEmail" placeholder="your@email.com" required>
            </div>
            
            <div class="auth-form-group">
              <label for="signupPassword">Password</label>
              <div class="password-input-wrapper">
                <input type="password" id="signupPassword" placeholder="••••••••" required>
                <button type="button" class="toggle-password" onclick="togglePasswordVisibility('signupPassword')">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <div class="auth-form-group">
              <label for="signupConfirmPassword">Confirm Password</label>
              <div class="password-input-wrapper">
                <input type="password" id="signupConfirmPassword" placeholder="••••••••" required>
                <button type="button" class="toggle-password" onclick="togglePasswordVisibility('signupConfirmPassword')">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>

            <button type="button" class="auth-generate-password-btn" onclick="generateStrongPassword()">
              Generate Strong Password
            </button>

            <div class="auth-checkbox-group">
              <input type="checkbox" id="termsCheckbox" required>
              <label for="termsCheckbox">
                I accept the <a href="terms-of-service.html" target="_blank">Terms & Conditions</a>
              </label>
            </div>

            <button class="auth-submit-btn auth-submit-signup" onclick="handleSignup()">Let's Go!</button>

            <div class="auth-divider">
              <span>or sign up with</span>
            </div>

            <div class="auth-social-buttons">
              <button class="auth-social-btn" onclick="handleSocialLogin('google')">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign up with Google
              </button>

              <button class="auth-social-btn" onclick="handleSocialLogin('linkedin')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Sign up with LinkedIn
              </button>

              <button class="auth-social-btn" onclick="handleSocialLogin('facebook')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Sign up with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.init();
  }

  init() {
    // Add modal HTML to body
    document.body.insertAdjacentHTML('beforeend', this.modalHTML);
    
    // Close modal when clicking outside
    document.getElementById('authModal').addEventListener('click', (e) => {
      if (e.target.id === 'authModal') {
        closeAuthModal();
      }
    });

    // Prevent form submission on Enter key
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => {
      form.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const activeTab = document.querySelector('.auth-tab.active').textContent.trim();
          if (activeTab === 'Login') {
            handleLogin();
          } else {
            handleSignup();
          }
        }
      });
    });
  }
}

// Global functions
function openAuthModal(tab = 'login') {
  const modal = document.getElementById('authModal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  switchAuthTab(tab);
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function switchAuthTab(tab) {
  const tabs = document.querySelectorAll('.auth-tab');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  
  tabs.forEach(t => t.classList.remove('active'));
  
  if (tab === 'login') {
    tabs[0].classList.add('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    tabs[1].classList.add('active');
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  }
}

function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', type);
}

function generateStrongPassword() {
  const length = 16;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  
  document.getElementById('signupPassword').value = password;
  document.getElementById('signupConfirmPassword').value = password;
  document.getElementById('signupPassword').type = 'text';
  document.getElementById('signupConfirmPassword').type = 'text';
  
  alert('Strong password generated! Make sure to save it securely.');
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }
  
  // This is a placeholder - in production, you would integrate with your authentication system
  alert('Login functionality will be connected to your authentication system.\n\nEmail: ' + email);
  // closeAuthModal();
}

function handleSignup() {
  const firstName = document.getElementById('signupFirstName').value;
  const lastName = document.getElementById('signupLastName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;
  const termsAccepted = document.getElementById('termsCheckbox').checked;
  
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    alert('Please fill in all fields');
    return;
  }
  
  if (!termsAccepted) {
    alert('Please accept the Terms & Conditions');
    return;
  }
  
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  
  // This is a placeholder - in production, you would integrate with your authentication system
  alert('Sign up functionality will be connected to your authentication system.\n\nName: ' + firstName + ' ' + lastName + '\nEmail: ' + email);
  // closeAuthModal();
}

function handleSocialLogin(provider) {
  // This is a placeholder - in production, you would integrate with OAuth providers
  alert('Social login with ' + provider + ' will be connected to your authentication system.');
}

// Initialize modal when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new AuthModal();
  });
} else {
  new AuthModal();
}
