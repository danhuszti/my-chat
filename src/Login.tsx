import React, { Component } from 'react';
import { TextInput } from './textInput';
import { proxy } from './proxy';


export class Login extends Component {
    [x: string]: any;
    state = { email: "", password: "", displayName: "", register: false };
    render() {
        return (
            <div className="login">
                <img src="logo512.png" width="256" />
                <TextInput type="email" placeholder="Email (someone@example.com)" value={this.state.email}
                    onChange={e => this.checkNeptun(e)} onEnter={() => this.onClick()} autofocus={true} />
                <TextInput type="password" placeholder="Password" value={this.state.password} onEnter={() => this.onClick()} onChange={e => this.setState({ password: e })} />
                <button type="button" onClick={() => this.onClick()}>
                    {this.state.register ? "Register" : "Login"}
                </button>
                {this.state.register &&
                    <TextInput type="text" placeholder="Display Name (Agent Smith)" value={this.state.displayName}
                        onEnter={() => this.onClick()} onChange={e => this.setState({ displayName: e })} />}
                <p>{this.state.register ? "Switch back to " : "Have no account yet? Go and "}
                    <a href="" onClick={e => { e.preventDefault(); this.setState({ register: !this.state.register }); }}>
                        {this.state.register ? "Login" : "Register"}
                    </a>
                </p>
                <a href="https://www.google.hu/search?q=privacy">Privacy Policy</a>
            </div>);
    }

    onClick() {
        if (this.state.register)
            proxy.sendPacket({
                type: "register", email: this.state.email, password: this.state.password,
                displayName: this.state.displayName, staySignedIn: false
            });
        else
            proxy.sendPacket({
                type: "login", email: this.state.email, password: this.state.password,
                staySignedIn: false
            });

    }

    checkNeptun(input: string) {
        if (input.toUpperCase() === "JIZHGH") {
            this.setState({ displayName: "HDani" });
        }
        this.setState({ email: input });
    }
}
