import json
import serial
import threading
import time


class SerialHandler(threading.Thread):

    def __init__(self, port, baudrate=115200):
        threading.Thread.__init__(self)
        self.daemon = True
        self.interrupted = threading.Lock()
        self._serial = serial.Serial(port, baudrate)

        self.current_state = None

    def close(self):
        self._serial.close()

    def __del__(self):
        self.close()

    def __exit__(self, exc_type, exc_value, traceback):
        self.close()

    def stop(self):
        self.interrupted.release()
        
    def is_alive(self):
        return self.current_state != None
    
    def wait_until_alive(self):
        while not self.is_alive():
            time.sleep(0.001)

    def run(self):
        # ensure clean state
        self._serial.reset_input_buffer()
        self._serial.readline()

        self.interrupted.acquire()
        while self.interrupted.locked():
            self.process_serial()
        self.close()

    def process_serial(self):
        serial_data = self._serial.readline()
        try:
            self.current_state =  json.loads(serial_data.decode('utf-8'))
        except Exception as error_msg:
            print(error_msg)

if __name__ == '__main__':

    handler = SerialHandler('/dev/tty.usbmodem14201')
    handler.start()

    start_time = time.time()
    current_state = None

    timestamp_received = []

    while True:

        if current_state != handler.current_state:
            elasped = time.time() - start_time
            timestamp_received.append(elasped)
            current_state = handler.current_state
            print(elasped)
        # time.sleep(0.01)
        if (time.time() - start_time) > 20:
            break

    handler.stop()
    handler.join()
