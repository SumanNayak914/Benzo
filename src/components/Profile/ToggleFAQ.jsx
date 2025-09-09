import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      title: "Coupons & Offers",
      solutions: [
        {
          question: "How to apply coupon codes?",
          answer: "Enter your coupon code in the 'Promo Code' field during checkout and click 'Apply' to get the discount."
        },
        {
          question: "Why is my coupon not working?",
          answer: "Check if the coupon is still valid, meets minimum order requirements, and is applicable to the items in your cart."
        },
        {
          question: "Where can I find current offers?",
          answer: "Visit our 'Offers' page or check your email for the latest deals and promotional codes."
        }
      ]
    },
    {
      title: "General Inquiry",
      solutions: [
        {
          question: "How to create an account?",
          answer: "Click on 'Sign Up' button, enter your details, verify your email, and start shopping!"
        },
        {
          question: "How to track my order?",
          answer: "Go to 'My Orders' section in your account or use the tracking link sent to your email."
        },
        {
          question: "What are your business hours?",
          answer: "Our customer support is available 24/7. Orders are processed Monday to Saturday, 9 AM to 6 PM."
        }
      ]
    },
    {
      title: "Payment Related",
      solutions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept Credit/Debit Cards, UPI, Net Banking, Wallets, and Cash on Delivery."
        },
        {
          question: "Payment failed but money was deducted",
          answer: "Don't worry! The amount will be refunded to your account within 3-5 business days automatically."
        },
        {
          question: "How to get a refund?",
          answer: "Refunds are processed automatically for cancelled orders. For returns, refund is initiated after quality check."
        }
      ]
    },
    {
      title: "Feedback & Suggestions",
      solutions: [
        {
          question: "How to provide feedback?",
          answer: "You can rate your order experience in the app or email us your feedback at feedback@Crateeasy.com"
        },
        {
          question: "How to report an issue?",
          answer: "Use the 'Report Issue' option in your order details or contact our support team directly."
        },
        {
          question: "Product suggestion",
          answer: "We love hearing from you! Share your product suggestions through the app or email us."
        }
      ]
    },
    {
      title: "Order / Products Related",
      solutions: [
        {
          question: "How to cancel my order?",
          answer: "You can cancel your order before it's dispatched from 'My Orders' section or contact support."
        },
        {
          question: "Product not available",
          answer: "We'll notify you if any item is out of stock and provide alternatives or partial refund."
        },
        {
          question: "Wrong product received",
          answer: "Report the issue immediately through the app. We'll arrange a replacement or full refund."
        },
        {
          question: "Delivery time",
          answer: "Most orders are delivered within 10-30 minutes. Exact time depends on your location and product availability."
        }
      ]
    },
    {
      title: "Gift Card",
      solutions: [
        {
          question: "How to purchase gift cards?",
          answer: "Gift cards are available in the app under 'Gift Cards' section. Choose amount and send to anyone!"
        },
        {
          question: "How to redeem gift cards?",
          answer: "Enter the gift card code during checkout in the 'Gift Card' field to apply the balance."
        },
        {
          question: "Gift card validity",
          answer: "Gift cards are valid for 1 year from the date of purchase and can be used multiple times until balance is exhausted."
        }
      ]
    },
    {
      title: "No-Cost EMI",
      solutions: [
        {
          question: "What is No-Cost EMI?",
          answer: "Pay for your orders in easy monthly installments without any additional interest charges."
        },
        {
          question: "Eligibility for No-Cost EMI",
          answer: "Available on orders above ₹3,000 with select credit cards. Check eligibility during checkout."
        },
        {
          question: "How to apply for EMI?",
          answer: "Select 'EMI' as payment method during checkout and choose your preferred tenure (3, 6, 9, or 12 months)."
        }
      ]
    },
    {
      title: "Wallet Related",
      solutions: [
        {
          question: "How to add money to wallet?",
          answer: "Go to 'My Wallet' section, click 'Add Money', choose amount and payment method to top up."
        },
        {
          question: "Wallet money not reflecting",
          answer: "Please wait 5-10 minutes for the transaction to process. If issue persists, contact support with transaction details."
        },
        {
          question: "Can I transfer wallet money?",
          answer: "Wallet money cannot be transferred to bank account but can be used for any purchases on the platform."
        }
      ]
    },
    {
      title: "Crateeasy Super Saver",
      solutions: [
        {
          question: "What is Crateeasy Super Saver?",
          answer: "A premium membership that offers exclusive discounts, free delivery, and priority customer support."
        },
        {
          question: "Super Saver benefits",
          answer: "Get up to 20% extra discount, free delivery on all orders, early access to sales, and dedicated support."
        },
        {
          question: "How to subscribe?",
          answer: "Go to 'Super Saver' section in the app, choose your plan (monthly/yearly), and complete the payment."
        }
      ]
    },
    {
      title: "Crateeasy Daily",
      solutions: [
        {
          question: "What is Crateeasy Daily?",
          answer: "Subscribe to daily essentials like milk, bread, and groceries for automatic delivery at your convenience."
        },
        {
          question: "How to set up daily delivery?",
          answer: "Choose your products, set delivery time, select frequency (daily/alternate days), and confirm subscription."
        },
        {
          question: "How to modify or cancel subscription?",
          answer: "Go to 'My Subscriptions', select the item you want to modify or cancel, and make the changes."
        },
        {
          question: "Missed delivery",
          answer: "If you miss a delivery, contact support within 24 hours for a redelivery or credit to your account."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="p-6 pb-2">
          <h1 className="text-2xl font-semibold text-gray-900">FAQs</h1>
        </div>

        {/* FAQ List */}
        <div className="px-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-100">
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-gray-900 font-medium">{faq.title}</span>
                <ChevronRight
                  className={`w-5 h-5 text-red-400 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {/* Answer Dropdown */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-screen pb-4' : 'max-h-0'
                }`}
              >
                <div className="pl-4 space-y-3">
                  {faq.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-800 mb-1">
                        {solution.question}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {solution.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}