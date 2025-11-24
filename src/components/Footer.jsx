import React, { useState } from 'react';

const Footer = () => {
    const [activePopup, setActivePopup] = useState(null);

    const footerContent = {
        disclaimer: {
            title: "Disclaimer",
            content: (
                <>
                    <p>The information and material contained in these pages and the terms, conditions, and descriptions that appear are subject to change without prior notice. Investments in equity shares, debentures, etc. are not obligations of or guaranteed by BlissQuants and are subject to investment risks.</p>
                    <p>The information contained on this website, including text, graphics, links, or other items, is provided on an “as is” and “as available” basis. BlissQuants does not warrant the accuracy, adequacy, or completeness of this information and material and expressly disclaims liability for errors or omissions in this information and material. No warranty of any kind—implied, express, or statutory—including but not limited to warranties of non-infringement of third-party rights, title, merchantability, fitness for a particular purpose, and freedom from computer virus—is given in conjunction with the information and materials.</p>
                    <p>In no event will BlissQuants be liable for any damages, including without limitation direct or indirect, special, incidental, or consequential damages, losses, or expenses arising in connection with this website or the use thereof or the inability to use it by any party, or in connection with any failure of performance, error, omission, interruption, defect, delay in operation or transmission, computer virus, or line or system failure, even if BlissQuants or its representatives are advised of the possibility of such damages, losses, or expenses. Hyperlinks from and to other websites are at your own risk; the content, accuracy, opinions expressed, and other links provided by these resources are not investigated, verified, monitored, or endorsed by BlissQuants.</p>
                    <p>BlissQuants is neither a broker nor a research analyst and does not provide any trading information. The company does not provide any trading tips in any real trading.</p>
                </>
            )
        },
        terms: {
            title: "Terms of Service",
            content: (
                <ol>
                    <li>The Site is owned, managed and operated by BlissQuants.</li>
                    <li>You must be 18 years of age or older to visit or use the Site in any manner. In the event that you are below 18 yrs of age, you are visiting the Site at your own risk and you alone shall be liable for your actions. By visiting this site or accepting these Terms of Use, you represent and warrant to the Company that you are 18 years of age or older, and that you have the right, authority and capacity to use the Site and agree to and abide by these Terms of Use. You also represent and warrant to the Company that you will use the Site in a manner consistent with any and all applicable laws and regulations.</li>
                    <li>By using the Site, you agree to follow and be bound by all terms and conditions concerning your use of the Site. Certain areas of the Site may have different terms of use posted. If there is a conflict between the Terms of Use and terms of use posted for a specific area of the Site, the latter shall have precedence with respect to your use of that area of the Site.</li>
                    <li>Our website may use cookies. By using our website and agreeing to these terms of use, you consent to our use of cookies in accordance with the terms of our privacy policy.</li>
                    <li>BlissQuants may terminate User's access to the Site or any part thereof at any time and for any reason without any notice. The provisions regarding disclaimer of warranty, accuracy of information, software, database other system or functionality of website and indemnification shall survive such termination. BlissQuants may monitor User's access to the Site.</li>
                    <li>BlissQuants may change or discontinue any aspect of the Site at any time, including, its content or features. BlissQuants reserves the right to change the Terms of Use applicable to use of the Site. Such changes shall be effective immediately upon notice, which shall be placed on the Site.</li>
                    <li>All contents on the Site are the exclusive property of BlissQuants except the third party content. The software, text, images, graphics, video and audio used on the Site belong to or are licensed to BlissQuants or its subsidiaries and affiliates. No material from the Site may be copied, modified, reproduced, republished, uploaded, transmitted, posted or distributed in any form without prior written permission from BlissQuants. All rights not expressly granted herein are reserved. Unauthorized use of the materials appearing on the Site may violate copyright, trademark and other applicable laws, and could result in criminal or civil penalties. You are granted a non-exclusive, non-transferable, limited right to access the Site and avail the services provided by BlissQuants on the Site.</li>
                    <li>BlissQuants does not make any warranties, express or implied, with respect to any service, information, data, software, system, functionality, statements or products made available on the Site. The information contained in the Site has been obtained from sources believed to be reliable. The Site, and all content, materials, information, software and services provided on the Site, are provided on an "as is" and "as available" basis.</li>
                    <li>BlissQuants does not warrant that the Site will operate error-free or that the Site and its servers are free of computer viruses or other harmful mechanisms. If your use of the Site or content therein results in the need for servicing or replacing equipment or data, BlissQuants is not responsible for any such costs. Site and content are provided "as is" and "as available" without any warranties of any kind. BlissQuants to the fullest extent permitted by law, disclaims all warranties, whether express or implied, including the fitness for particular purpose and non-infringement. BlissQuants makes no warranties about the accuracy, reliability, completeness, or timeliness of the content, services, software, text, graphics, and links.</li>
                </ol>
            )
        },
        privacy: {
            title: "Privacy Policy",
            content: (
                <>
                    <p>The User's right to privacy is of paramount importance to BlissQuants. Any information provided by the User will not be shared with any third party, except for the intended purpose for which such information is provided by the User, in which case the User’s consent is implied. BlissQuants reserves the right to use the information to provide the User a more personalized online experience.</p>
                    <p>If the Site provides links to third-party websites and access to content, products, and services from users, advertisers, affiliates, and sponsors, the User agrees that BlissQuants is not responsible for the availability or the content provided on such third-party websites. Users are requested to review the privacy policies and other policies of external websites before use. BlissQuants is not responsible for opinions, advice, statements, advertisements, or any third-party content accessible through the Site, and Users shall bear all risks associated with using such content. BlissQuants is not responsible for any loss or damage incurred from dealing with third parties.</p>
                    <p>In general, Users can visit BlissQuants’s websites without revealing their identity or any information about themselves. However, there may be times when BlissQuants requires information from the User. BlissQuants does not rent, sell, or share personal information with non-affiliated companies.</p>
                    <p>Users may choose to provide personal information such as name, address, or email ID for purposes such as correspondence or subscriptions. Users may also upload their personal profile or CV containing personal, academic, and professional background. However, Users agree not to upload or post any obscene, defamatory, or annoying material. If a User requests that BlissQuants not use this information for further contact, BlissQuants will respect the decision.</p>
                    <p>BlissQuants intends to protect the quality and integrity of personally identifiable information. The company will make sincere efforts to respond in a timely manner to requests for correcting inaccuracies. Users can request corrections by returning the message containing the inaccuracies with the correct details.</p>
                    <p>BlissQuants sometimes collects anonymous information from Site visits to improve customer service. This data may be used by BlissQuants or its affiliates/vendors to analyze trends and statistics while maintaining the highest level of confidentiality. This information is reviewed only at an aggregate level and not individually. Users who do not want their details used in this manner may disable cookies or opt-out on the download or request page.</p>
                </>
            )
        },
        refund: {
            title: "Refund Policy",
            content: (
                <>
                    <p>BlissQuants follows a transparent and no-fuss cancellation policy. All cancellation requests should be sent to our billing department at <strong>inquiry@Blissqunats.com</strong>. A cancellation request will be considered valid only after it is confirmed by the respective department. Cancellation requests will be accepted only when the request is made within <strong>12 hours of placing the order</strong> and the execution of the project has not started.</p>
                    <p>BlissQuants will not be held responsible for any third-party services such as hosting, web development, content writing, etc. Due to the nature of the services, BlissQuants does not guarantee any refunds upon cancellation.</p>
                    <p>In case of monthly payment, it is understood that payment for the next month is released only after reviewing the current month’s performance. BlissQuants does not make any guarantees related to traffic, rankings, etc., and will not be responsible for any refund claims related to the same.</p>
                    <p>BlissQuants provides education programs and services across India. If you are not satisfied with our services, you will receive a refund according to our above-mentioned policies.</p>
                </>
            )
        },
        policies: {
            title: "Our Policies",
            content: "View our comprehensive policies including data protection, user conduct, content guidelines, and platform usage rules."
        }
    };

    const openPopup = (key) => {
        setActivePopup(key);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setActivePopup(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

        .footer {
          width: 100%;
          padding: 12px 20px;
          background: #ffffff;
          color: #aaa;
          font-size: 12px;
          text-align: justify;
          font-family: 'Quicksand', sans-serif;
        }

        .footer-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        .footer-link {
          color: #aaa;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s ease;
          padding: 3px 10px;
          cursor: pointer;
        }

        .footer-link:hover {
          color: #84c225;
          text-decoration: underline;
        }

        .separator {
          color: #aaa;
          font-size: 13px;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 10px;
        }

        .social-icon {
          color: #aaa;
          font-size: 16px;
          transition: transform 0.3s ease, color 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 8px;
          text-decoration: none;
        }

        .social-icon:hover {
          transform: scale(1.1);
          background-color: #ffffff;
        }

        .facebook:hover {
          color: #4267B2;
        }

        .instagram:hover {
          color: #E1306C;
        }

        .google:hover {
          color: #DB4437;
        }

        .linkedin:hover {
          color: #0077B5;
        }

        .copyright {
          color: #aaa;
          font-size: 12px;
        }

        .copyright-highlight {
          color: #84c225;
          font-weight: 600;
        }

        /* Popup Styles */
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          font-family: 'Quicksand', sans-serif;
        }

        .popup-box {
          background-color: #222;
          width: 800px;
          max-width: 90%;
          max-height: 90vh;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
        }

        .popup-header {
          background-color: #3b3531;
          padding: 10px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #84c225;
        }

        .popup-title {
          color: #84c225;
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .popup-close {
          background: none;
          border: none;
          color: #888;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          line-height: 1;
          width: auto;
          height: auto;
          border-radius: 0;
          transition: color 0.2s;
        }

        .popup-close:hover {
          color: #fff;
        }

        .popup-content {
          padding: 15px;
          overflow-y: auto;
          flex: 1;
          color: #ddd;
          font-size: 14px;
          line-height: 1.5;
          background-color: #3b3531;
        }

        .popup-content p {
          margin-bottom: 15px;
        }

        .popup-content ol {
          margin: 0;
          padding-left: 20px;
        }

        .popup-content ol li {
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .popup-footer {
          padding: 10px 15px;
          text-align: right;
          border-top: 1px solid #84c225;
          background-color: #3b3531;
        }

        .close-btn {
          background-color: #666;
          color: #ffffff;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s;
        }

        .close-btn:hover {
          background-color: #84c225;
        }

        .popup-content::-webkit-scrollbar {
          width: 8px;
        }

        .popup-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .popup-content::-webkit-scrollbar-thumb {
          background: #84c225;
          border-radius: 4px;
        }

        .popup-content::-webkit-scrollbar-thumb:hover {
          background: #9cd63a;
        }

        @media (max-width: 1024px) {
          .footer-wrapper {
            gap: 15px;
          }

          .footer-content {
            text-align: center;
          }

          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
          }

          .social-icons {
            margin-top: 10px;
          }
        }

        @media (max-width: 768px) {
          .footer-links {
            gap: 5px;
          }

          .separator, .footer-link {
            font-size: 11px;
          }

          .social-icon {
            font-size: 14px;
            width: 28px;
            height: 28px;
            padding: 6px;
          }

          .popup-header {
            padding: 1.25rem 1.5rem;
          }

          .popup-title {
            font-size: 18px;
          }

          .popup-content {
            padding: 1.5rem;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 8px;
            font-size: 11px;
          }

          .footer-links {
            gap: 4px;
            flex-wrap: wrap;
          }

          .footer-link {
            font-size: 11px;
            padding: 2px 6px;
          }

          .separator {
            font-size: 11px;
          }

          .social-icons {
            gap: 8px;
          }

          .social-icon {
            font-size: 12px;
            width: 24px;
            height: 24px;
            padding: 5px;
          }
        }
      `}</style>

            <footer className="footer">
                <div className="footer-wrapper">
                    <div className="footer-content">
                        <div className="footer-links">
                            <a href="https://blissquants.com/BlissAboutUs#collapseOne" className="footer-link" target="_blank" rel="noopener noreferrer">Company</a>
                            <span className="separator">|</span>
                            <a href="https://blissquants.com/BlissPeople" className="footer-link" target="_blank" rel="noopener noreferrer">Team</a>
                            <span className="separator">|</span>
                            <a href="https://blissquants.com/BlissAboutUs#collapseThree" className="footer-link" target="_blank" rel="noopener noreferrer">Career</a>
                            <span className="separator">|</span>
                            <a href="/contact" className="footer-link">Contact Us</a>
                            <span className="separator">|</span>
                            <span onClick={() => openPopup('disclaimer')} className="footer-link">Disclaimer</span>
                            <span className="separator">|</span>
                            <span onClick={() => openPopup('terms')} className="footer-link">Terms of Service</span>
                            <span className="separator">|</span>
                            <span onClick={() => openPopup('privacy')} className="footer-link">Privacy Policy</span>
                            <span className="separator">|</span>
                            <span onClick={() => openPopup('refund')} className="footer-link">Refund Policy</span>
                            <span className="separator">|</span>
                            <span onClick={() => openPopup('policies')} className="footer-link">Policies</span>
                        </div>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/blissquants" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/falgunivahora/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="social-icon google">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/blissquants/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>

                        <div className="copyright">
                            © 2025 <span className="copyright-highlight">BlissQuants Datalytics LLP</span> All rights reserved
                        </div>
                    </div>
                </div>

                {activePopup && (
                    <div className="popup-overlay" onClick={closePopup}>
                        <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                            <div className="popup-header">
                                <h3 className="popup-title">{footerContent[activePopup].title}</h3>
                                <button className="popup-close" onClick={closePopup}>×</button>
                            </div>
                            <div className="popup-content">
                                {typeof footerContent[activePopup].content === 'string' ? (
                                    <p>{footerContent[activePopup].content}</p>
                                ) : (
                                    footerContent[activePopup].content
                                )}
                            </div>
                            <div className="popup-footer">
                                <button className="close-btn" onClick={closePopup}>Close</button>
                            </div>
                        </div>
                    </div>
                )}
            </footer>
        </>
    );
};

export default Footer;