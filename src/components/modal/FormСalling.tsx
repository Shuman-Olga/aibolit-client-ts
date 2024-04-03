import React, { useContext, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";

import { dataKindDoctors } from "../../data/dataListKindDoctors";
import { ModalContext } from "../../context/ModelContext";
import FormField from "./FormField";
import { TypeForm, formChema } from "../../types/formShema";

export function FormCallingDoctor() {
  const [message, setMessage] = useState("");
  const { close } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TypeForm>({ resolver: zodResolver(formChema) });

  const onSubmit: SubmitHandler<TypeForm> = async (data) => {
    // await emailjs
    //   .send("service_3v0hnkn", "template_ooahi3b", data, "PhUOVu-NXcTpMJR7t")
    //   .then((response) => {
    //     if (response.status === 200) {
    setMessage("Сообщение отправлено!");
    //     }
    //     reset();
    setTimeout(() => {
      close();
    }, 2000);
    //   })
    //   .catch((err) => {
    //     console.log("Упс! Ошибочка...", err);
    //   });
  };
  useEffect(() => {
    // устанавливаем фокус на первое поле (имя пользователя) после монтирования компонента
    setFocus("name");
  }, [setFocus]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {!isSubmitSuccessful ? (
        <>
          <FormField
            id="name"
            type="text"
            placeholder="Имя*"
            name="name"
            register={register}
            error={errors.name}
          />
          <FormField
            id="phone"
            type="phone"
            placeholder="Телефон*"
            name="phone"
            register={register}
            error={errors.phone}
          />
          <FormField
            id="address"
            type="text"
            placeholder="Адрес"
            name="address"
            register={register}
            error={errors.address}
          />
          <Form.Group className="mb-3">
            <Form.Select id="doctor" {...register("doctor")}>
              <option>Выберите врача...</option>
              {dataKindDoctors &&
                dataKindDoctors.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <FloatingLabel className="mb-3" label={undefined}>
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              id="message"
              {...register("message")}
            />
          </FloatingLabel>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Я согласен(на) на обработку персональных данных."
              id="accept"
              defaultChecked={true}
              feedback="Необходимо ваше согласие перед отправкой"
              feedbackType="invalid"
              isInvalid={!!errors.accept}
              {...register("accept")}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Отправить
          </Button>
        </>
      ) : (
        <div className="form-group mt-2">
          <div
            className={
              isSubmitSuccessful ? "alert alert-success" : "alert alert-danger"
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </Form>
  );
}
