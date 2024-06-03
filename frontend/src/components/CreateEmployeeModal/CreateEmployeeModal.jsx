import React, { useState } from 'react';
import Modal from 'react-modal';
import style from './CreateEmployeeModal.module.scss';

Modal.setAppElement('#root');

const CreateEmployeeModal = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    patronymic: '',
    email: '',
    phoneNumber: '',
    employmentType: 'повний робочий день',
    identificationNumber: '',
    startDate: '',
    endDate: '',
    gender: '',
    position: 'викладач',
    residenceAddress: '',
    birthDate: '',
    actualAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onCreate(formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create Employee"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <h2>Створити нову особову картку працівника</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>
          Ім'я:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
          Прізвище:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <label>
          По батькові:
          <input type="text" name="patronymic" value={formData.patronymic} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Телефон:
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>

        <label>
          Тип працевлаштування:
          <select name="employmentType" value={formData.employmentType} onChange={handleChange} required>
            <option value="повний робочий день">Повний робочий день</option>
            <option value="неповний робочий день">Неповний робочий день</option>
            <option value="контракт">Контракт</option>
          </select>
        </label>

        <label>
          Ідентифікаційний номер:
          <input type="text" name="identificationNumber" value={formData.identificationNumber} onChange={handleChange} required />
        </label>

        <label>
          Дата прийняття:
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        </label>

        <label>
          Стать:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Виберіть стать</option>
            <option value="чоловіча">Чоловік</option>
            <option value="жіноча">Жінка</option>
          </select>
        </label>
        <label>
          Посада:
          <select name="position" value={formData.position} onChange={handleChange} required>
          <option value="викладач">Викладач</option>
            <option value="прибиральниця">Прибиральниця</option>
            <option value="адміністратор">Адміністратор</option>
            <option value="директор">Директор</option>
            <option value="головний бухгалтер">Головний бухгалтер</option>
            <option value="помічник бухгалтера">Помічник бухгалтера</option>
            <option value="завуч">Завуч</option>
            <option value="охоронець">Охоронець</option>
            <option value="настроювач інструментів">Настроювач інструментів</option>
            <option value="завгосп">Завгосп</option>
          </select>
        </label>
        <label>
        Місце прописки:
          <input type="text" name="residenceAddress" value={formData.residenceAddress} onChange={handleChange} />
        </label>
        <label>
        Дата народження:
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
        </label>
        <label>
        Місце фактичного проживання:
          <input type="text" name="actualAddress" value={formData.actualAddress} onChange={handleChange} />
        </label>
        <div className={style.buttonGroup}>
          <button type="submit">Створити</button>
          <button type="button" onClick={onClose}>Відмінити</button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateEmployeeModal;
