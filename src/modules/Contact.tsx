import { Formik, Form } from "formik";
import React from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Input from "../components/ReusableComponents/Input";
import TextArea from "../components/ReusableComponents/TextArea";

const Contact = () => {
  return (
    <>
      <h1 className="font-extrabold text-2xl md:text-5xl xl:text-3xl capitalize flex justify-center text-bgBlack">
        contact
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-10 mb-40">
        <div className="h-full flex flex-col gap-6 p-5 w-full font-medium text-textLightBlack">
          <div className="flex flex-row items-center gap-4">
            <AiOutlineHome className="w-6 h-6 md:w-10 md:h-10 xl:w-6 xl:h-6 text-primaryGreen" />
            <div className="flex flex-col gap-1">
              <h1 className="text-sm md:text-xl xl:text-sm font-semibold">
                Butwal,Rupandehi,Nepal
              </h1>
              <h5 className="text-xs md:text-lg xl:text-xs">
                32900 Amuwa,Rupandehi
              </h5>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
            <BsTelephone className="w-6 h-6 md:w-10 md:h-10 xl:w-6 xl:h-6 text-primaryGreen" />
            <div className="flex flex-col gap-1">
              <h1 className="text-sm md:text-xl xl:text-sm font-semibold">
                +9779811558820
              </h1>
              <h5 className="text-xs md:text-lg xl:text-xs">
                Sun to Fri 9am to 9pm
              </h5>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
            <AiOutlineMail className="w-6 h-6 md:w-10 md:h-10 xl:w-6 xl:h-6 text-primaryGreen" />
            <div className="flex flex-col gap-1">
              <h1 className="text-sm md:text-xl xl:text-sm font-semibold">
                bijay.subedi837@gmail.com
              </h1>
              <h5 className="text-xs md:text-lg xl:text-xs">
                send me your query anytime!
              </h5>
            </div>
          </div>
        </div>
        <div className="px-5 lg:px-1">
          <Formik initialValues={{}} onSubmit={() => {}} validationSchema={{}}>
            <Form className="grid grid-cols-1 justify-between gap-y-4">
              <Input name="name" placeholder="Enter your name" />
              <Input name="name" placeholder="Enter subject" />
              <TextArea name="name" placeholder="Enter message" />
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Contact;
