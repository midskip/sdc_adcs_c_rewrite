Sensor_Output = function(){
    Gyro_Data_Convert(Gyro_Accel_Get());
    Magnet_Data_Convert(Magnet_Vector_Get());
    Sun_Data_Convert(Gyro_Vector_Get());
    GPS_Data_Convert(GPS_Time_Get());
    EHS_Data_Convert(EHS_Vector_Get());
};

MEKF = function(){
    Filter(Sensor_Output(Gyro,Gyro_Gain));
    Filter(Sensor_Output(EHS,EHS_Gain));
    Filter(Sensor_Output(Magnet,Magnet_Gain));
    Filter(Sensor_Output(Sun,Sun_Gain));
    Gps_Time();
    Get_Update_Step();
};

Store_State = function(){
    Store_Gyro_State();
    Store_Magnet_State();
    Store_Sun_State();
    Store_GPS_State();
    Store_EHS_State();
    Store_MEKF_State();
};

Get_Update_Step = function(){
    Get_MEKF_State();
    Gyro_Data_Convert(Gyro_Accel_Get());
};

Announce_Attitude = function(){
    Announce_MEKF_Output();
};