import { Formik, Form } from "formik";
import React from "react";
import Input from "../components/ReusableComponents/Input";
import TextArea from "../components/ReusableComponents/TextArea";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40 bg-green-200">
      <h1 className="font-extrabold text-5xl capitalize text-bgBlack">
        about me
      </h1>
      <div className="h-full w-full bg-red-400"></div>
      <div>
        <Formik initialValues={{}} onSubmit={() => {}} validationSchema={{}}>
          <Form className="grid grid-cols-1 justify-between gap-y-4">
            <Input name="name" placeholder="Enter your name" />
            <Input name="name" placeholder="Enter subject" />
            <TextArea name="name" placeholder="Enter message" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
