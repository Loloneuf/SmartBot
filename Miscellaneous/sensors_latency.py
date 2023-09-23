import os
import time
from serialhandler import SerialHandler
import tools
import numpy as np

allmean =[]
freq=[]
standard_deviation=[]

EXP_FOLDERNAME = os.path.join('experiments', 'sampling_rate')
tools.ensure_dir(EXP_FOLDERNAME)
experimental_data= (os.path.join(EXP_FOLDERNAME,'calculated_data2.json'))


def getdata(name):
    EXP_FILENAME =(os.path.join(EXP_FOLDERNAME, name + '.json'))

    EXP_TIME_SECOND = 20
    if __name__ == '__main__':

        handler = SerialHandler('/dev/ttyACM4', 115200)

        handler.current_state = {'time': 0}
        current_state = handler.current_state

        handler.start()
        start_time = time.time()
        timestamps = []
        while True:
            ## check if received new data
            if current_state['time'] != handler.current_state['time']:
                elasped = time.time() - start_time
                timestamps.append(elasped)
                print(elasped)

                current_state = handler.current_state

            time.sleep(0.0001)

            if (time.time() - start_time) > EXP_TIME_SECOND:
                break

        handler.stop()
        handler.join()
    import numpy as np
    mean_latency=np.mean(np.diff(timestamps))
    freq.append(1/mean_latency)
    results = {}
    results['timestamps'] = timestamps
    tools.save_to_json(results, EXP_FILENAME)

getdata('allcaptors')
getdata('photoresistor')
getdata('RGB_sensor')

calculated_data={}
calculated_data['data frequency'] =freq
tools.save_to_json(calculated_data,experimental_data)
freq
