import React from "react";
import { Formik, Form, Field } from "formik";

interface Short {
  word: string;
}

const init: Short = {
  word: ""
}

const onSubmit = (values: Short) => {
  console.log(values);
};

const ShortLink = (): JSX.Element => (
  <section>
    <header>
      <h1>Create a short link</h1>
    </header>
    <Formik initialValues={init} onSubmit={onSubmit}>
      <Form>
        <Field
          name="word"
          type="text"
          placeholder="Text"
        />
      </Form>
    </Formik>
  </section>
);

export default ShortLink;
