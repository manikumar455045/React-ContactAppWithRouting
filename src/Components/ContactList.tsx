import React from 'react'
import axios from 'axios'
import { IUsers } from '../Models/IUsers';
import {Link} from 'react-router-dom'

interface IProps{

}
interface IState{
    users : IUsers[]
}

class ContactList extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            users : [] as IUsers[]
        }
    }

    componentDidMount() {
        let dataUrl : string = "https://gist.githubusercontent.com/manikumar455045/040cfb672a251464ccba35c99adf0922/raw/d4bc89badc9658f13cb5d94e00f6946582f8b968/contact.json"
        axios.get(dataUrl).then((response) => {
            this.setState({
                users : response.data
            })
        }).catch((error) => {
            console.error(error)
        })
    }


    render() : React.ReactNode{
        return (
            <React.Fragment>
                <section className="mt-2">
                    <div className="container">
                        <div className="row">
                            <div className="col">

                                <div className="table table-hover table-striped text-center">
                                    <thead className="bg-dark text-white">
                                    <tr>
                                        <td>ID</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>City</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.users.map((user) => {
                                            return (
                                                <tr key={user.login.uuid}>
                                                    <td>{user.login.uuid.substr(31)}</td>
                                                    <td><Link to={`/contact-list/${user.login.uuid}`}>{user.name.title} {user.name.first} {user.name.last}</Link></td>
                                                    <td>{user.email}</td>
                                                    <td>{user.location.city}</td>

                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

}
export default ContactList;