import { useForm, SubmitHandler } from "react-hook-form";
import { Modal } from "./Modal";
import { Button } from "./Button";
import CheckIcon from "../assets/check.svg?react";
import { MouseEventHandler } from "react";

interface RegistrationForm {
    name: string;
    website: string;
    phone: string;
}

type FormField = {
    name: keyof RegistrationForm;
    label: string;
    type: HTMLInputElement["type"];
};

const formFields: FormField[] = [
    {
        name: "name",
        label: "Имя",
        type: "text",
    },
    {
        name: "website",
        label: "Сайт компании",
        type: "text",
    },
    {
        name: "phone",
        label: "Телефон",
        type: "phone",
    },
];

interface RegistrationProps {
    onClose: MouseEventHandler;
    isOpen: boolean;
}

export function Registration({ onClose, isOpen }: RegistrationProps) {
    const { register, handleSubmit, reset } = useForm<RegistrationForm>();

    const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
        await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        reset();

        alert("Данные отправлены, нужен дизайн экрана успеха");
    };

    return (
        <Modal title="Регистрация" {...{ onClose, isOpen }}>
            <form className="modal__form form" onSubmit={handleSubmit(onSubmit)}>
                {formFields.map(({ name, type, label }) => (
                    <div key={name} className="form__section">
                        <div className="glassed glassed_border-radius_small">
                            <input
                                className="input"
                                type={type}
                                {...register(name)}
                                placeholder={label}
                                required
                            />
                        </div>
                    </div>
                ))}
                <Button type="submit" className="form__button">Получить код</Button>
                <div className="form__section">
                    <div className="checkbox">
                        <input
                            className="checkbox__input"
                            type="checkbox"
                            name="privacy"
                            id="privacy"
                            required
                        />
                        <label htmlFor="privacy" className="checkbox__box">
                            <div className="checkbox__icon">
                                <CheckIcon />
                            </div>
                        </label>
                        <div className="checkbox__label">
                            Отправляя сведения через электронную форму, вы&nbsp;даете согласие на&nbsp;обработку персональных данных, в&nbsp;том числе сбор, хранение и&nbsp;передачу третьим лицам представленной вами информации на&nbsp;условиях <a href="https://roistat.com/ru/privacy" rel="nofollow" target="_blank">Политики обработки персональных данных</a>.
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    );
}
