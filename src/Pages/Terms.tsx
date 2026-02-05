import { memo } from "react";
import Footer from "../Components/Footer";

const Terms = () => {

    const termsAndConditionsData = [
  {
    id: 1,
    title: "Acceptance of Terms",
    content:
      "By accessing or using Polyglot Academy (the \"Website\"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use the Website."
  },
  {
    id: 2,
    title: "Changes to the Terms",
    content:
      "We reserve the right to modify or update these Terms and Conditions at any time. Any changes will become effective immediately upon publication on the Website. Continued use of the Website after changes are posted constitutes your acceptance of the revised terms."
  },
  {
    id: 3,
    title: "Use of the Website",
    content:
      "You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use and enjoyment of the Website by any other user."
  },
  {
    id: 4,
    title: "User Accounts",
    content:
      "To access certain features of the Website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account."
  },
  {
    id: 5,
    title: "Intellectual Property",
    content:
      "All content, trademarks, logos, texts, graphics, images, videos, software, and designs available on the Website are the property of Polyglot Academy or its licensors and are protected by applicable intellectual property laws."
  },
  {
    id: 6,
    title: "User-Generated Content",
    content:
      "By submitting content to the Website, you grant Polyglot Academy a worldwide, non-exclusive, royalty-free, and transferable license to use, reproduce, distribute, modify, and display such content in connection with the operation of the Website and its services."
  },
  {
    id: 7,
    title: "Privacy Policy",
    content:
      "Your use of the Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data."
  },
  {
    id: 8,
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Polyglot Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of or inability to use the Website."
  },
  {
    id: 9,
    title: "Indemnification",
    content:
      "You agree to indemnify, defend, and hold harmless Polyglot Academy, its affiliates, directors, employees, and partners from any claims, damages, losses, liabilities, and expenses arising out of your use of the Website or your violation of these Terms and Conditions."
  },
  {
  id: 10,
  title: "Governing Law",
  content:
    "These Terms and Conditions shall be governed by and interpreted in accordance with the laws of Canada and the Province of Quebec, without regard to conflict of law principles."
}
,
  {
  id: 11,
  title: "Dispute Resolution",
  content:
    "Any dispute arising out of or relating to these Terms and Conditions or the use of the Website shall be resolved through binding arbitration in Montreal, Quebec, Canada, in accordance with applicable arbitration rules."
}
,
  {
    id: 12,
    title: "Contact Information",
    content:
      "If you have any questions or concerns regarding these Terms and Conditions, please contact us at support@polyglotacademy-mtl.com."
  }
];


    return(
        <section className="flex flex-col justify-center items-center">
           
            <h1 className="mt-15 text-gray-100 font-bold text-[2em] text-center">Terms and Conditions</h1>

            <div className="mt-15 flex flex-col justify-center gap-7 mb-25">
                {termsAndConditionsData.map((t)=>{
                    return(
                        <div className="w-[800px] text-gray-100 flex flex-col gap-1 max-[900px]:w-[600px] max-[650px]:w-[400px] max-[450px]:w-[300px]">
                            <div className="flex flex-row items-center gap-2 text-[18px] font-[600] ">
                                <div>{t.id}.</div>
                                <div>
                                    {t.title}
                                </div>
                            </div>

                            <div>
                                {t.content}
                            </div>
                        </div>
                    )
                })}
            </div>

            <Footer/>
        </section>
    )
}

export default memo(Terms);