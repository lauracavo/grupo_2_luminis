import React, { Component } from 'react';

class Category extends Component {
    constructor() {
        super();
        this.state = {
            CategoryList: [
                'Infantil',
                'Terror',
                'Drama',
                'Novelas',
                'Comedia',
                'Romanticos',
            ]
        };
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                            Category in Data Base
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                this.state.CategoryList.map((category, index) => (
                                    <div key={index} className="col-lg-6 mb-4">
                                        <div className="card bg-dark text-white shadow">
                                            <div className="card-body">{category}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;
