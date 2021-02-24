import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

interface Short {
  word: string;
}

const init: Short = {
  word: ""
}


const ShortLink = (): JSX.Element => {
  const [shortLink, setShortLink] = useState<string>();
  const onSubmit = (values: Short) => {
    setShortLink("123456");
  };

  return (
    <section>
      <header>
        <h1>Create a short link</h1>
      </header>
      <div>
        {shortLink && `Your short link is: ${shortLink}`}
      </div>
      <Formik initialValues={init} onSubmit={onSubmit}>
        <Form>
          <Field
            name="word"
            type="text"
            placeholder="Text"
          />
          <input
            name="sumbit"
            type="submit"
            value="Submit"
          />
        </Form>
      </Formik>
    </section>
  );
};

export default ShortLink;
