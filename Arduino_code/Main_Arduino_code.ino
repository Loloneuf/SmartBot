#include "Grove_Motor_Driver_TB6612FNG.h"
#include <Wire.h>

MotorDriver motor;

    int enA = 10;
    int in1 = 12;
    int in2 = 7;
    int enB = 11;
    int in3 = 5;
    int in4 = 9;
    int stby = 13;
    
    int port_photosensor1 = A0;
    int port_photosensor2 = A1;
    int motorSpeedA =0;
    int motorSpeedB = 0;
    void setup() {
      pinMode(enA, OUTPUT);
      pinMode(in1, OUTPUT);
      pinMode(in2, OUTPUT);
      pinMode(enB, OUTPUT);
      pinMode(in3, OUTPUT);
      pinMode(in4, OUTPUT);
      pinMode(stby,OUTPUT);
      //Serial.begin(115200);
      digitalWrite(in1, LOW);
      digitalWrite(in2, HIGH);
      digitalWrite(in3, LOW);
      digitalWrite(in4, HIGH);
      digitalWrite(stby, HIGH);
      Wire.begin();
      Serial.begin(9600);
      motor.init();
    }
    void loop() {

      
      Serial.print(analogRead(port_photosensor2));
      if (analogRead(port_photosensor2)>100){
        motorSpeedB=100;
      }
        else{
        motorSpeedB=0;}

      
       if (analogRead(port_photosensor1)>700){
        motorSpeedA=100;
        
      }
      else{
        motorSpeedA=0;}

      Serial.println();
      analogWrite(enA, motorSpeedA); // Send PWM signal to motor A
      analogWrite(enB,motorSpeedB);
    }
