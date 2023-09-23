import os
import time
from serialhandler import SerialHandler

import tools

EXP_FOLDERNAME = os.path.join('experiments', 'sampling_rate')
tools.ensure_dir(EXP_FOLDERNAME)

EXP_FILENAME = os.path.join(EXP_FOLDERNAME, 'rgb_2_4ms.json')

EXP_TIME_SECOND = 20


if __name__ == '__main__':

    handler = SerialHandler('/dev/tty.usbmodem14201', 115200)

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
    mean_latency = np.mean(np.diff(timestamps))

    results = {}
    results['timestamps'] = timestamps
    results['mean_latency'] = mean_latency

    tools.save_to_json(results, EXP_FILENAME)
