import React from 'react';
import { ReactMic } from 'react-mic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./css/AudioRecord.css";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";

class AudioRecord extends React.Component {
        state = {
            record: false,
            button: "btn btn-primary mybutton disabled",
            result: ""
        }

    startRecording = () => {
        this.setState({ record: true, button:"btn btn-primary mybutton" });
        toast.info('Audio Recording Started', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    stopRecording = () => {
        this.setState({ record: false, button:"btn btn-primary mybutton disabled" });
        toast.error('Audio Recording Stopped', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }


    onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    onStop=(recordedBlob)=> {
        console.log('recordedBlob is: ', recordedBlob);
        toast.info('Audio is being uploaded', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        const fd = new FormData();
        fd.append('audio', recordedBlob.blob);
        axios.post('http://localhost:8080/users/audio',fd)
            .then(res=> {
                    console.log(res);
                    this.setState({result: res.data});
                    console.log(this.state.result);
                }
            ).catch(e => {
            console.log(e);
        })

    }

    handleModal(){
        this.setState({result : ""})
    }

    showResults=()=>{
        return(
            <Modal show={this.state.result}>
                <Modal.Header><b>Response from server</b></Modal.Header>
                <Modal.Body>
                    {this.state.result}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{this.handleModal()}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {
        return (
            <div>
                <div className="card text-center">
                    <div className="card-header">
                        <h3>Test</h3>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Record your cough audio</h4>
                        <p className="card-text">
                            <ReactMic
                                record={this.state.record}
                                className="sound-wave"
                                onStop={this.onStop}
                                onData={this.onData}
                                strokeColor="#000000"
                                backgroundColor="#fff"
                                mimeType="audio/mp3"
                            />
                        </p>
                        <button className="btn btn-primary mybutton" onClick={this.startRecording} type="button">Start</button>
                        <button className={`${this.state.button}`} onClick={this.stopRecording} type="button">Stop/Upload</button>
                    </div>
                    <div className="card-footer text-muted">
                        Last checked 2 days ago
                    </div>
                </div>
                {this.showResults()}
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        );
    }
}

export default AudioRecord;
