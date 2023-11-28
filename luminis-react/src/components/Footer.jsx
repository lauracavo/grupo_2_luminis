import React,  { Component } from 'react';
import Counter from './Counter';

class Footer extends  Component {
    render(){

        return (
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © Luminis 2023</span>
                    </div>
                </div>
            </footer>
        )

    }
}

export default Footer;