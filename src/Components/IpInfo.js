import { IpContainer } from "../styles/IpContainer";
const IpInfo = ({ ip, city, region, isp, timezone }) => {
  return (
    <IpContainer>
      <div>
        <p>IP ADDRESS</p>
        <b>{ip}</b>
      </div>
      <span></span>
      <div>
        <p>LOCATION</p>
        <b>{city + " , " + region}</b>
      </div>
      <span></span>

      <div>
        <p>TIME ZONE</p>
        <b>{timezone}</b>
      </div>
      <span></span>

      <div>
        <p>ISP</p>
        <b>{isp}</b>
      </div>
    </IpContainer>
  );
};

export default IpInfo;
