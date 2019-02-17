import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../store/actions';

import styles from './RegForm.module.css';

class RegForm extends Component {
    state = {              // Здесь хранится актуальное состояние формы регистрации
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        checkbox: false,
        emailValid: false,
        nameValid: false,
        passwordValid: false,
        cancelButtonHovered: false,
        regButtonHovered: false
    }


    CancelButtonHover = () => {
        this.setState({
            cancelButtonHovered: !this.state.cancelButtonHovered
        });
    }
    RegButtonHover = () => {
        this.setState({
            regButtonHovered: !this.state.regButtonHovered
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.nameValid === false) {
            this.setState({ errorName: 'Введите никнейм' })
        }
        if (this.state.emailValid === false) {
            this.setState({ errorEmail: 'Указан неверный email' })
        }
        if (this.state.passwordValid === false) {
            this.setState({ errorPassword: 'Пароль должен содержать от 8 до 32 символов' })
        }
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ errorConfirmPassword: 'Пароль не совпадает' })
        }
        console.log(this.state);

        if (this.state.checkbox && this.state.emailValid && (this.state.password === this.state.confirmPassword)) {
            this.props.dispatch(registerUser(this.state.email, this.state.password, this.state.name));
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
        if (e.target.name === 'email') {
            if (e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                this.emailCheck(true)
            } else {
                this.emailCheck(false)
            }
        }
        if (e.target.name === 'name') {
            if (e.target.value.match(/^.{2,32}$/u )) {
                this.nameCheck(true)
            } else {
                this.nameCheck(false)
            }
        }
        if (e.target.name === 'password') {
            if (e.target.value.match(/^.{8,32}$/u )) {
                this.passwordCheck(true)
            } else {
                this.passwordCheck(false)
            }
        }
    }

    emailCheck = (bool) => {
        this.setState({
            emailValid:bool
        })
    }
    nameCheck = (bool) => {
        this.setState({
            nameValid:bool
        })
    }
    passwordCheck = (bool) => {
        this.setState({
            passwordValid:bool
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checkbox: !this.state.checkbox
        })
    }

    clickCancelHandler = (event) => {
        event.preventDefault();
        this.props.history.push('/auth');
    }

    render() {
        // console.log(this.state);
        return (
            <div className={styles.Main}>
                <div className={styles.EllipseBig}>
                    <div className={styles.Title}>
                        Pocket Messenger
                    </div>
                    <div className={styles.Subtitle}>
                        For geeks by geeks
                    </div>
                    <div className={styles.EllipseSmall} />
                </div>

                <form className={styles.inputBox} action='true'>
                    <div className={styles.formItems + ' ' + styles.Name}>
                        <input
                            type ='text'
                            name='name'
                            onChange={this.handleChange}
                            value={this.state.name}
                            placeholder='Ваш никнейм'
                            className={styles.Input }
                            title='Имя должно содержать от 2 до 32 символов'
                        />
                    </div>
                    <div className={styles.errorForm} >{this.state.errorName ? this.state.errorName : ''}</div>
                    <div className={styles.formItems + ' ' + styles.Mail}>
                        <input
                            type ='text'
                            name='email'
                            onChange={this.handleChange}
                            value={this.state.email}
                            placeholder='E-mail'
                            className={styles.Input}
                            required
                        />
                    </div>
                    <div className={styles.errorForm} >{this.state.errorEmail ? this.state.errorEmail : ''}</div>
                    <div className={styles.formItems + ' ' + styles.Pass}>
                        <input
                            type ='password'
                            name='password'
                            onChange={this.handleChange}
                            value={this.state.password}
                            placeholder='Пароль'
                            className={styles.Input }
                            title='Пароль должен содержать от 8 до 32 символов'
                        />
                    </div>
                    <div className={styles.errorForm} >{this.state.errorPassword ? this.state.errorPassword : ''}</div>
                    <div className={styles.formItems + ' ' + styles.passRepeat}>
                        <input
                            type ='password'
                            name='confirmPassword'
                            onChange={this.handleChange}
                            value={this.state.confirmPassword}
                            placeholder='Повторите пароль'
                            className={styles.Input}
                            required
                        />
                    </div>
                    <div className={styles.errorForm} >{this.state.errorConfirmPassword ? this.state.errorConfirmPassword : ''}</div>
                    <div className={styles.formItemsCheck}>
                        {/*<div className={styles.Checkbox}>*/}
                        <input
                            type='checkbox'
                            onChange={this.handleCheckbox}
                            className={styles.Checkbox}
                            checked
                        />
                        {/*</div>*/}
                        <p className={styles.Text}>Настоящим подтверждаю, что я ознакомлен и согласен с условиями политики конфиденциальности.
                            <a className={styles.KnowMore} href='/1'>Узнать больше</a>
                        </p>
                    </div>
                    <button
                        onClick={this.handleSubmit}
                        className={styles.ButtonOk}>РЕГИСТРАЦИЯ
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(withRouter(RegForm));
