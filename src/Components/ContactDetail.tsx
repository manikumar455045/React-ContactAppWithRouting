import React from 'react'
import {RouteComponentProps,Link} from 'react-router-dom'
import axios from "axios";
import {IUsers} from "../Models/IUsers"

interface IProps extends RouteComponentProps<{contactID:string}>{

}
interface IState{
selectedContact : IUsers
}

class ContactDetail extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedContact: {} as IUsers
        }
    }

    componentDidMount() {
        let dataUrl: string = "https://gist.githubusercontent.com/manikumar455045/040cfb672a251464ccba35c99adf0922/raw/d4bc89badc9658f13cb5d94e00f6946582f8b968/contact.json"
        axios.get(dataUrl).then((response) => {
                let contacts: IUsers[] = response.data;
                let contactID: string = this.props.match.params.contactID
                let contact: IUsers | undefined = contacts.find((contact) => {
                    return contactID === contact.login.uuid
                })
                if (contact) {
                    this.setState({
                        selectedContact: contact
                    })
                }
            }
        ).catch((error) => {
            console.log(error)
        })

    }

    render(): React.ReactNode {
        return (
            <React.Fragment>{
                Object.keys(this.state.selectedContact).length > 0 &&
                <div className="container mt-3">
                    <div className="card">
                        <div className="card-header bg-dark p-5"></div>
                        <div className="card-body text-center">
                            <img src={this.state.selectedContact.picture.large}
                                 className="img-thumbnail rounded-circle contact-img" alt=""/>
                            <div className="list-group mt-2">
                                <div className="list-group-item">Name
                                    : {this.state.selectedContact.name.title} {this.state.selectedContact.name.first} {this.state.selectedContact.name.last}</div>
                                <div className="list-group-item">Gender : {this.state.selectedContact.gender}</div>
                                <div className="list-group-item">Username
                                    : {this.state.selectedContact.login.username}</div>
                                <div className="list-group-item">Age : {this.state.selectedContact.dob.age}</div>
                                <div className="list-group-item">Phone Number : {this.state.selectedContact.phone}</div>
                            </div>
                        </div>
                    </div>
                    <Link to="/contact-list">Back to Contacts</Link>
                </div>
            }
            </React.Fragment>
        );
    }
}
export default ContactDetail;