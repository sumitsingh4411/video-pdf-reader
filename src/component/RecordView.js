import { useReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam";
const RecordView = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: true });
  console.log(status);
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center',marginTop:5}}>
        <div>
          <Webcam height={300} style={{borderRadius:10}}/>
        </div>
        <div style={{ display: 'flex' }}>
          {
            (status!=="stopped" && status!=="idle") ? 
            <button className='btn btn-danger btn-lg' onClick={stopRecording}>Stop Recording</button> : 
            <button className='btn btn-success btn-lg' onClick={startRecording}>Start Recording</button>
          }
        </div>
      </div>
      <div style={{display: 'flex',alignItems:'center', justifyContent:'center',marginTop:20 }}>
        <video src={mediaBlobUrl} controls autoplay  style={{height:300 , width:400 ,borderRadius:10}} />
      </div>
    </div>
  );
};

export default RecordView;