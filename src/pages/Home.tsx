import { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const HomeScreen = (): JSX.Element => {
  const { control, handleSubmit } = useForm<Record<string, any>>();
  const [shortUrl, setShortUrl] = useState("https://google.pl");

  const onSubmit = (data: Record<string, any>): void => {
    console.log("longUrl", data.longUrl);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <Container>
      <Row className='mt-5'>
        <Col md={12}>
          <h1>Shorten your URL with one click!</h1>
          <p>
            Paste below a valid long url and receive a short version which you
            can share easier
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mb-3'>
              <Controller
                control={control}
                name='longUrl'
                defaultValue=''
                render={({ field: { onChange, value, ref } }) => (
                  <Form.Control
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    placeholder='Enter valid URL to shorten'
                  />
                )}
              />
            </Form.Group>
            <Controller
              control={control}
              render={({ field: { ref }, formState }) => (
                <Button
                  type='submit'
                  disabled={formState.isSubmitting}
                  className='btn btn-primary'
                >
                  {formState.isSubmitting && (
                    <span className='spinner-border spinner-border-sm mr-1' />
                  )}
                  Make it short!
                </Button>
              )}
              name={""}
            />
          </Form>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={11}>
          <strong>Your short URL: </strong>{" "}
          <a href={shortUrl} target='_blank' rel='noreferrer'>
            {shortUrl}
          </a>
        </Col>
        <Col md={1}>
          <Button
            type='button'
            className='btn btn-s btn-outlined'
            onClick={handleCopyClick}
          >
            Copy
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
