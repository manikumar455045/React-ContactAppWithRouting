import React from 'react'
import '../App.css'
interface IProps{

}
interface IState{

}

class Home extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {

        }
    }

    render() : React.ReactNode{
        return (
            <React.Fragment>
                <div className="Landing-div">
                    <div className="Landing-wrapper d-flex flex-column justify-content-center align-items-center h-100 text-white text-center">
                        <div className="container">
                            <h1>React Contact App With Routing</h1>
                            <p className="pl-3 pr-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias consectetur doloremque doloribus, eos ex id ipsam ipsum laboriosam minus mollitia quas, quis recusandae, rerum sequi velit voluptas voluptatum?</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default Home;