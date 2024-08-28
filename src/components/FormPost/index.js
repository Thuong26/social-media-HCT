import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import emailjs from 'emailjs-com'; 
import styles from './FormPost.module.scss';

const cx = classNames.bind(styles);

function FormPost() {
  const formRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;
    const name = form.author.value.trim();
    const email = form.email.value.trim();
    const comment = form.comment.value.trim();

    if (!name || !email || !comment) {
      setErrorMessage('All fields are required');
      return;
    }

    setIsSubmitting(true);

    const emailParams = {
      name: name,
      email: email,
      message: comment
    };

    emailjs.send('service_8gaa2ya', 'template_jjm6sbx', emailParams, 'Fkx8AbiQ697u1bVX1')
      .then((result) => {
        setSuccessMessage('Your comment has been submitted successfully!');
        setErrorMessage('');
        form.reset();
      }, (error) => {
        console.error('There was a problem sending the email:', error);
        setErrorMessage(`There was a problem submitting your comment: ${error.text}. Please try again.`);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <form ref={formRef} className={cx("commentForm")} onSubmit={handleSubmit}>
        <p className={cx("comment-form-field-notes")}> 
        * Tất cả các trường hợp là bắt buộc</p>
        <div className={cx("input-comment")}>
          <textarea
            id="comment"
            className={cx("form-field")}
            name="comment"
            cols="45"
            rows="6"
            placeholder="Viêt bình luận *"
            aria-required="true"
          ></textarea>
        </div>
        <div className={cx('input-inf')}>
          <div className={cx("input-name")}>
            <input
              id="name"
              name="author"
              type="text"
              size="30"
              placeholder="Tên *"
            />
          </div>
          <div className={cx("input-email")}>
            <input
              id="email"
              name="email"
              type="email"
              size="30"
              placeholder=" Email *"
            />
          </div>
        </div>
        <div className={cx("form-submit")}>
          <button name="submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Gửi bình luận'}
          </button>
        </div>
        {successMessage && <p className={cx("success-message")}>{successMessage}</p>}
        {errorMessage && <p className={cx("error-message")}>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default FormPost;
