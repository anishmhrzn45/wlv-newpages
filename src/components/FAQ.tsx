import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is there a limit for how many sales support staff we can have using the apps?",
      answer: "There is no limit to how many staff you can have using our software and how many devices you use; our plans our based on your monthly usage"
    },
    {
      question: "What internet connection speed do we need for a good quality video/audio call?",
      answer: "We recommend you and your customers to have a minimum 15 mbs download speed (or greater)"
    },
    {
      question: "What type of training and support is available for our managers and staff?",
      answer: "We have different levels of support available to suit for each plan by email, chat, phone"
    },
    {
      question: "What is a chat?",
      answer: "A chat is an online conversation tool in the widget that creates connection between the customer and a sales support person"
    },
    {
      question: "If we are using the webliveview software can we cancel the subscription plan?",
      answer: "Yes - a monthly subscription plan can be canceled anytime; you will be paid up until the next monthly renewal date only"
    },
    {
      question: "What happens if we need a different plan if we reach our monthly limit?",
      answer: "You will get an email notification when your at 90% of your monthly limit is used; you can then contact us about a new plan"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="bg-[#f9f9ff] rounded-xl py-12 px-6 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e1b4b] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions about our video shopping platform.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-[#1e1b4b] hover:underline cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-gray-600 leading-relaxed mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;