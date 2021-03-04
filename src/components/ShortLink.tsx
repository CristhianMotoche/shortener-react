import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { ShortService } from "../client/services/ShortService";

interface Short {
  word: string;
}

const init: Short = {
  word: ""
}

const ShortLink = (): JSX.Element => {
  const [shortLink, setShortLink] = useState<string>();
  const onSubmit = async (values: Short) => {
    const resp = await ShortService.postShortService({ word: values.word });
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
