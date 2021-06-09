import React from 'react';
import { ReactMic } from 'react-mic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./css/AudioRecord.css"
import axios from "axios";

export class AudioRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
            button: "btn btn-primary mybutton disabled"
        }
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

    onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
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
