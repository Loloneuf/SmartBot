import os
import time
from serialhandler import SerialHandler
import tools
import numpy as np
import serial
import json


EXP_FOLDERNAME = os.path.join('experiments', 'captor_efficiency')
tools.ensure_dir(EXP_FOLDERNAME)

def getdata(name):
    EXP_FILENAME =(os.path.join(EXP_FOLDERNAME, name + '.json'))

    EXP_TIME_SECOND = 10

    handler = SerialHandler('/dev/ttyACM3', 115200)

    #handler.current_state = {'time': 0}
    #current_state = handler.current_state


    handler.start()
    handler.wait_until_alive()
            
    start_time = time.time()
    value =[]
    g=[]
    while True:
        value.append(handler.current_state)
        time.sleep(0.01)

        if (time.time() - start_time) > EXP_TIME_SECOND:
            break

    handler.stop()
    handler.join()                 
    results = {}
    results['value']=value
    tools.save_to_json(results, EXP_FILENAME)
    return value
Experiments =['red_paper','blue_paper','green_paper','black&white_without_light','black&white','red','green','blue','yellow','magenta','cyan']
for i in range(len(Experiments)):
    getdata(Experiments[i])
