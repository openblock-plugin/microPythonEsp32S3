const {formatMessage, ArgumentType, BlockType, ProgramModeType, CommonPeripheral} = window.Scratch;

const PNPID_LIST = [
    // CH340
    'USB\\VID_1A86&PID_7523',
    // CH343
    'USB\\VID_1A86&PID_55D3',
    // CH9102
    'USB\\VID_1A86&PID_55D4',
    // CP2102
    'USB\\VID_10C4&PID_EA60'
];

const SERIAL_CONFIG = {
    baudRate: 115200,
    dataBits: 8,
    stopBits: 1,
    dtr: false,
    rts: false
};

const DIVECE_OPT = {
    type: 'microPython',
    fqbn: 'esp32:esp32s3',
    baud: {
        darwin: '460800',
        linux: '460800',
        win32: '921600'
    },
    dtr: false,
    rts: false
};

const Pins = {
    IO0: '0',
    IO1: '1',
    IO2: '2',
    IO3: '3',
    IO4: '4',
    IO5: '5',
    IO6: '6',
    IO7: '7',
    IO8: '8',
    IO9: '9',
    IO10: '10',
    IO11: '11',
    IO12: '12',
    IO13: '13',
    IO14: '14',
    IO15: '15',
    IO16: '16',
    IO17: '17',
    IO18: '18',
    IO19: '19',
    IO20: '20',
    IO21: '21',
    IO35: '35',
    IO36: '36',
    IO37: '37',
    IO38: '38',
    IO39: '39',
    IO40: '40',
    IO41: '41',
    IO42: '42',
    IO43: '43',
    IO44: '44',
    IO45: '45',
    IO46: '46',
    IO47: '47',
    IO48: '48'
};

const Level = {
    High: '1',
    Low: '0'
};

const Eol = {
    Warp: 'warp',
    NoWarp: 'noWarp'
};

const Mode = {
    Input: 'IN',
    Output: 'OUT',
    InputPullup: 'PULL_UP',
    InputPulldown: 'PULL_DOWN'
};

const InterrupMode = {
    Rising: 'RISING',
    Falling: 'FALLING',
    Change: 'CHANGE',
    LowLevel: 'LOW_LEVEL',
    HighLevel: 'HIGH_LEVEL'
};

class MicroPythonEsp32S3 extends CommonPeripheral {
    constructor (runtime, deviceId) {
        super(runtime, deviceId, PNPID_LIST, SERIAL_CONFIG, DIVECE_OPT);
    }
}

class OpenBlockMicroPythonEsp32S3Device {
    get DEVICE_ID () {
        return 'microPythonEsp32S3';
    }

    get PINS_MENU () {
        return [
            {
                text: 'IO0',
                value: Pins.IO0
            },
            {
                text: 'IO1',
                value: Pins.IO1
            },
            {
                text: 'IO2',
                value: Pins.IO2
            },
            {
                text: 'IO3',
                value: Pins.IO3
            },
            {
                text: 'IO4',
                value: Pins.IO4
            },
            {
                text: 'IO5',
                value: Pins.IO5
            },
            {
                text: 'IO6',
                value: Pins.IO6
            },
            {
                text: 'IO7',
                value: Pins.IO7
            },
            {
                text: 'IO8',
                value: Pins.IO8
            },
            {
                text: 'IO9',
                value: Pins.IO9
            },
            {
                text: 'IO10',
                value: Pins.IO10
            },
            {
                text: 'IO11',
                value: Pins.IO11
            },
            {
                text: 'IO12',
                value: Pins.IO12
            },
            {
                text: 'IO13',
                value: Pins.IO13
            },
            {
                text: 'IO14',
                value: Pins.IO14
            },
            {
                text: 'IO15',
                value: Pins.IO15
            },
            {
                text: 'IO16',
                value: Pins.IO16
            },
            {
                text: 'IO17',
                value: Pins.IO17
            },
            {
                text: 'IO18',
                value: Pins.IO18
            },
            {
                text: 'IO19',
                value: Pins.IO19
            },
            {
                text: 'IO20',
                value: Pins.IO20
            },
            {
                text: 'IO21',
                value: Pins.IO21
            },
            {
                text: 'IO38',
                value: Pins.IO38
            },
            {
                text: 'IO39',
                value: Pins.IO39
            },
            {
                text: 'IO40',
                value: Pins.IO40
            },
            {
                text: 'IO41',
                value: Pins.IO41
            },
            {
                text: 'IO42',
                value: Pins.IO42
            },
            {
                text: 'IO43',
                value: Pins.IO43
            },
            {
                text: 'IO44',
                value: Pins.IO44
            },
            {
                text: 'IO45',
                value: Pins.IO45
            },
            {
                text: 'IO46',
                value: Pins.IO46
            },
            {
                text: 'IO47',
                value: Pins.IO47
            },
            {
                text: 'IO48',
                value: Pins.IO48
            }
        ];
    }

    get MODE_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.modeMenu.input',
                    default: 'input',
                    description: 'label for input pin mode'
                }),
                value: Mode.Input
            },
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.modeMenu.output',
                    default: 'output',
                    description: 'label for output pin mode'
                }),
                value: Mode.Output
            },
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.modeMenu.inputPullup',
                    default: 'input-pullup',
                    description: 'label for input-pullup pin mode'
                }),
                value: Mode.InputPullup
            },
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.modeMenu.inputPulldown',
                    default: 'input-pulldown',
                    description: 'label for input-pulldown pin mode'
                }),
                value: Mode.InputPulldown
            }
        ];
    }

    get ANALOG_PINS_MENU () {
        return [
            {
                text: 'IO1',
                value: Pins.IO1
            },
            {
                text: 'IO2',
                value: Pins.IO2
            },
            {
                text: 'IO3',
                value: Pins.IO3
            },
            {
                text: 'IO4',
                value: Pins.IO4
            },
            {
                text: 'IO5',
                value: Pins.IO5
            },
            {
                text: 'IO6',
                value: Pins.IO6
            },
            {
                text: 'IO7',
                value: Pins.IO7
            },
            {
                text: 'IO8',
                value: Pins.IO8
            },
            {
                text: 'IO9',
                value: Pins.IO9
            },
            {
                text: 'IO10',
                value: Pins.IO10
            }
        ];
    }

    get LEVEL_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.levelMenu.high',
                    default: 'high',
                    description: 'label for high level'
                }),
                value: Level.High
            },
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.levelMenu.low',
                    default: 'low',
                    description: 'label for low level'
                }),
                value: Level.Low
            }
        ];
    }

    get TOUCH_PINS_MENU () {
        return [
            {
                text: 'IO1',
                value: Pins.IO1
            },
            {
                text: 'IO2',
                value: Pins.IO2
            },
            {
                text: 'IO3',
                value: Pins.IO3
            },
            {
                text: 'IO4',
                value: Pins.IO4
            },
            {
                text: 'IO5',
                value: Pins.IO5
            },
            {
                text: 'IO6',
                value: Pins.IO6
            },
            {
                text: 'IO7',
                value: Pins.IO7
            },
            {
                text: 'IO8',
                value: Pins.IO8
            },
            {
                text: 'IO9',
                value: Pins.IO9
            },
            {
                text: 'IO10',
                value: Pins.IO10
            },
            {
                text: 'IO11',
                value: Pins.IO11
            },
            {
                text: 'IO12',
                value: Pins.IO12
            },
            {
                text: 'IO13',
                value: Pins.IO13
            },
            {
                text: 'IO14',
                value: Pins.IO14
            },
            {
                text: 'IO15',
                value: Pins.IO15
            }
        ];
    }

    get INTERRUP_MODE_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.InterrupModeMenu.risingEdge',
                    default: 'rising edge',
                    description: 'label for rising edge interrup'
                }),
                value: InterrupMode.Rising
            },
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.InterrupModeMenu.fallingEdge',
                    default: 'falling edge',
                    description: 'label for falling edge interrup'
                }),
                value: InterrupMode.Falling
            },
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.InterrupModeMenu.changeEdge',
                    default: 'change edge',
                    description: 'label for change edge interrup'
                }),
                value: InterrupMode.Change
            },
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.InterrupModeMenu.low',
                    default: 'low level',
                    description: 'label for low level interrup'
                }),
                value: InterrupMode.LowLevel
            },
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.InterrupModeMenu.high',
                    default: 'high level',
                    description: 'label for high level interrup'
                }),
                value: InterrupMode.HighLevel
            }
        ];
    }

    get EOL_MENU () {
        return [
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.eolMenu.warp',
                    default: 'warp',
                    description: 'label for warp print'
                }),
                value: Eol.Warp
            },
            {
                text: formatMessage({
                    id: 'microPythonEsp32S3.eolMenu.noWarp',
                    default: 'no-warp',
                    description: 'label for no warp print'
                }),
                value: Eol.NoWarp
            }
        ];
    }

    constructor (runtime) {
        this.runtime = runtime;
        this._peripheral = new MicroPythonEsp32S3(this.runtime, this.DEVICE_ID);
    }

    getInfo () {
        return [
            {
                id: 'pin',
                name: formatMessage({
                    id: 'microPythonEsp32S3.category.pins',
                    default: 'Pins',
                    description: 'The name of the esp32-S3 microPython device pin category'
                }),
                color1: '#4C97FF',
                color2: '#3373CC',
                color3: '#3373CC',
                blocks: [
                    {
                        opcode: 'setPinMode',
                        text: formatMessage({
                            id: 'microPythonEsp32S3.pins.setPinMode',
                            default: 'set pin [PIN] mode [MODE]',
                            description: 'MicroPython esp32-S3 set pin mode'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: Pins.IO1
                            },
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'mode',
                                defaultValue: Mode.Input
                            }
                        }
                    },
                    {
                        opcode: 'setDigitalOutput',
                        text: formatMessage({
                            id: 'microPythonEsp32S3.pins.setDigitalOutput',
                            default: 'set digital pin [PIN] out [LEVEL]',
                            description: 'MicroPython esp32-S3 set digital pin out'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: Pins.IO1
                            },
                            LEVEL: {
                                type: ArgumentType.STRING,
                                menu: 'level',
                                defaultValue: Level.High
                            }
                        }
                    },
                    {
                        opcode: 'setPwmOutput',
                        text: formatMessage({
                            id: 'microPythonEsp32S3.pins.setPwmOutput',
                            default: 'set pwm pin [PIN] out [OUT]',
                            description: 'MicroPython esp32-S3 set pwm pin out'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: Pins.IO1
                            },
                            OUT: {
                                type: ArgumentType.UINT10_NUMBER,
                                defaultValue: '1023'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'readDigitalPin',
                        text: formatMessage({
                            id: 'microPythonEsp32S3.pins.readDigitalPin',
                            default: 'read digital pin [PIN]',
                            description: 'MicroPython esp32-S3 read digital pin'
                        }),
                        blockType: BlockType.BOOLEAN,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: Pins.IO1
                            }
                        }
                    },
                    {
                        opcode: 'readAnalogPin',
                        text: formatMessage({
                            id: 'microPythonEsp32S3.pins.readAnalogPin',
                            default: 'read analog pin [PIN]',
                            description: 'MicroPython esp32-S3 read analog pin'
                        }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'analogPins',
                                defaultValue: Pins.IO1
                            }
                        }
                    },
                    {
                        opcode: 'readTouchPin',
                        text: formatMessage({
                            id: 'microPythonEsp32S3.pins.readTouchPin',
                            default: 'read touch pin [PIN]',
                            description: 'MicroPython esp32-S3 read touch pin'
                        }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'touchPins',
                                defaultValue: Pins.IO1
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'setServoOutput',
                        text: formatMessage({
                            id: 'microPythonEsp32S3.pins.setServoOutput',
                            default: 'set servo pin [PIN] out [OUT]',
                            description: 'MicroPython esp32-s3 set servo pin out'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: Pins.IO1
                            },
                            OUT: {
                                type: ArgumentType.HALF_ANGLE,
                                defaultValue: '90'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'attachInterrupt',
                        text: formatMessage({
                            id: 'microPythonEsp32S3.pins.attachInterrupt',
                            default: 'attach interrupt pin [PIN] mode [MODE] executes',
                            description: 'MicroPython esp32-S3 attach interrupt'
                        }),
                        blockType: BlockType.CONDITIONAL,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'pins',
                                defaultValue: Pins.IO1
                            },
                            MODE: {
                                type: ArgumentType.STRING,
                                menu: 'interruptMode',
                                defaultValue: InterrupMode.Rising
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    // Legacy aliases, kept for backward compatibility.
                    {
                        opcode: 'esp32S3ReadTouchPin',
                        text: formatMessage({
                            id: 'microPythonEsp32S3.pins.readTouchPin',
                            default: 'read touch pin [PIN]',
                            description: 'MicroPython esp32-S3 read touch pin'
                        }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            PIN: {
                                type: ArgumentType.STRING,
                                menu: 'touchPins',
                                defaultValue: Pins.IO1
                            }
                        },
                        hideFromPalette: true,
                        func: 'readTouchPin'
                    }
                ],
                menus: {
                    pins: {
                        items: this.PINS_MENU
                    },
                    mode: {
                        items: this.MODE_MENU
                    },
                    level: {
                        acceptReporters: true,
                        items: this.LEVEL_MENU
                    },
                    analogPins: {
                        items: this.ANALOG_PINS_MENU
                    },
                    touchPins: {
                        items: this.TOUCH_PINS_MENU
                    },
                    interruptMode: {
                        items: this.INTERRUP_MODE_MENU
                    }
                }
            },
            {
                id: 'console',
                name: formatMessage({
                    id: 'microPythonEsp32S3.category.console',
                    default: 'Console',
                    description: 'The name of the esp32-S3 microPython device console category'
                }),
                color1: '#FF3399',
                color2: '#CC297A',
                color3: '#CC297A',
                blocks: [
                    {
                        opcode: 'consolePrint',
                        text: formatMessage({
                            id: 'microPythonEsp32S3.console.consolePrint',
                            default: 'print [TEXT] [EOL]',
                            description: 'MicrpPython console print'
                        }),
                        blockType: BlockType.COMMAND,
                        arguments: {
                            TEXT: {
                                type: ArgumentType.STRING,
                                defaultValue: 'Hello OpenBlock'
                            },
                            EOL: {
                                type: ArgumentType.STRING,
                                menu: 'eol',
                                defaultValue: Eol.Warp
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    },
                    {
                        opcode: 'consoleInput',
                        text: formatMessage({
                            id: 'microPythonEsp32S3.console.consoleInput',
                            default: 'prompt [TEXT] and read input',
                            description: 'MicrpPython console input'
                        }),
                        blockType: BlockType.REPORTER,
                        arguments: {
                            TEXT: {
                                type: ArgumentType.STRING,
                                defaultValue: 'Input a number:'
                            }
                        },
                        programMode: [ProgramModeType.UPLOAD]
                    }
                ],
                menus: {
                    eol: {
                        items: this.EOL_MENU
                    }
                }
            }
        ];
    }
}

export default OpenBlockMicroPythonEsp32S3Device;
