import React, { useState } from "react";
import TextField from "../inputs/textField";
import Button from "../../ui/button/button";
import RadioField from "../inputs/radioField/radioField";
import SelectField from "../inputs/selectField/selectField";
import { currentUser } from "../../../mocData/user";

const UserEditForm = () => {
    const initialData = { ...currentUser };
    const [inputData, setInputData] = useState(initialData);
    const handleChange = (target) => {
        setInputData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const outputDta = {
            ...inputData
        };
        console.log("outputDta", outputDta);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <TextField
                name="email"
                label="Введите электронную почту"
                value={inputData.email}
                placeholder="e-mail@example.com"
                onChange={handleChange}
            />
            <TextField
                name="firstName"
                label="Ваше имя"
                value={inputData.firstName}
                placeholder="Имя"
                onChange={handleChange}
            />
            <TextField
                name="lastName"
                label="Ваша фамилия"
                value={inputData.lastName}
                placeholder="Фамилия"
                onChange={handleChange}
            />
            <RadioField
                name="sex"
                label="Ваш пол:"
                value={inputData.sex}
                onChange={handleChange}
                options={[
                    { name: "male", value: "male" },
                    { name: "female", value: "female" }
                ]}
            />
            <SelectField
                name="university"
                label="Выберите университет"
                onChange={handleChange}
                defaultOption="Список ВУЗов..."
                value={inputData.university}
                options={[
                    { name: "СПбГПУ (Политех)", value: "SPbSTU" },
                    { name: "University 2", value: "university_2" },
                    { name: "University 3", value: "university_3" },
                    { name: "University 4", value: "university_4" },
                    { name: "University 5", value: "university_5" },
                    { name: "University 6", value: "university_6" },
                    { name: "University 7", value: "university_7" }
                ]}
            />
            <SelectField
                name="specialization"
                label="Степень (курс)"
                onChange={handleChange}
                defaultOption="Список специальностей..."
                value={inputData.specialization}
                options={[
                    { name: "Хирург", value: "surgeon" },
                    { name: "Кардиолог", value: "cardiologist" },
                    { name: "Отоларинголог", value: "otolaryngologist" },
                    { name: "Педиатр", value: "pediatrician" },
                    { name: "Проктолог", value: "proctologist" },
                    { name: "Уролог", value: "urologist" },
                    { name: "Гинеколог", value: "gynecologist" },
                    { name: "Флеболог", value: "зhlebologist" }
                ]}
            />
            <SelectField
                name="grade"
                label="Степень (курс)"
                onChange={handleChange}
                defaultOption="Курс..."
                value={inputData.grade}
                options={[
                    { name: "1 курс", value: "1_course" },
                    { name: "2 курс", value: "2_course" },
                    { name: "3 курс", value: "3_course" },
                    { name: "4 курс", value: "4_course" },
                    { name: "5 курс", value: "5_course" },
                    { name: "Бакалавр", value: "bachelor" },
                    { name: "Магистр", value: "master" },
                    { name: "Аспирант", value: "graduate_student" },
                    { name: "Интерн", value: "intern" },
                    { name: "Практикующий врач", value: "practicing" }
                ]}
            />
            <TextField
                name="img"
                label="Ссылка на аватар"
                value={inputData.img}
                placeholder="https://..."
                onChange={handleChange}
            />
            <Button
                type="submit"
                className="submit-button"
            >Submit</Button>
        </form>
    );
};

export default UserEditForm;
