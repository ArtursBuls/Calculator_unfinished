import React, { useState } from 'react';
import 'flexboxgrid';
import { Rounded } from './buttons/rounded';
import { RoundedNumbers } from '../components/buttons/roundedNumbers';
import { Small } from './buttons/small';
import { Equal } from '../components/signs/equal';
import { Dot } from '../components/signs/dot';
import { Divide } from '../components/signs/divide';
import { Minus } from '../components/signs/minus';
import { Percent } from '../components/signs/percent';
import { Plus } from '../components/signs/plus';
import { Times } from '../components/signs/times';
import { PlusMinus } from '../components/signs/plus-minus';
import { Prolate } from './buttons/prolate';
import { Rectangle } from './buttons/rectangle';
import { Sun } from './sunIcon/sun';
import { Moon } from './moonIcon/moon';
// import { UserInput } from '../components/inputs/userInput';
import '../components/calculator.css';
import '../components/inputs/userInput.css';

export function Calculator() {
    const [input, setInput] = useState<string[]>([]);

    const inputHandler = (label: string) => {
        if (input.length < 18) {
            setInput([...input, label]);
        }
    }

    const inputClearLastHandler = () => {
        setInput([...input].slice(0, -1));
    }

    const plusMinusHandler = () => {
        console.log('have no ideas...so far')
    }

    return (
        <div className="box">
            <div>
                <div className="row">
                    <div className="col-xs-6">
                        <Rectangle
                            label={'Scientific'}
                        />
                    </div>
                    <div className="col-xs-6">
                        <Rectangle
                            label={'Standard'}
                        />
                    </div>
                </div>
                <div className="divider-line"></div>
                <br /><br /> <br />
                <div className="row start-xs">
                    <div className="col-xs-12">
                        <Small>
                            <Moon />
                        </Small>
                    </div>
                </div>
                <br />
                <div className="row between-xs">
                    <div className="col-xs-1">
                        <Small>
                            <Sun />
                        </Small>
                    </div>
                    <div className="col-xs-11">
                        <h3
                            className='input'
                        >
                            {input}
                        </h3>
                    </div>
                </div>
                <div className="row end-xs">
                    <div className="col-xs-12">
                        <h3
                            className='result'
                        >
                            0
                        </h3>
                    </div>
                </div>
                <div className="divider-line"></div>
                <br />
                <div className="row">
                    <div className="col-xs-3">
                        <RoundedNumbers
                            backgroundColor={'black'}
                            label={'C'}
                            color={'white'}
                            fontSize={"40px"}
                            setNumbers={() => inputClearLastHandler()}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'black'}
                            color={'white'}
                            fontSize={"0px"}
                            setNumbers={() => inputHandler('%')}
                        >
                            <Percent />
                        </Rounded>

                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'black'}
                            color={'white'}
                            fontSize={"0px"}
                            setNumbers={() => plusMinusHandler()}
                        >
                            <PlusMinus />
                        </Rounded>

                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'red'}
                            color={'white'}
                            fontSize={"0px"}
                            setNumbers={() => inputHandler('/')}
                        >
                            <Divide />
                        </Rounded>

                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-3">
                        <RoundedNumbers
                            backgroundColor={'lightgrey'}
                            label={"7"}
                            color={'black'}
                            fontSize={"40px"}
                            setNumbers={() => inputHandler('7')}
                        />
                    </div>
                    <div className="col-xs-3">
                        <RoundedNumbers
                            backgroundColor={'lightgrey'}
                            label={"8"}
                            color={'black'}
                            fontSize={"40px"}
                            setNumbers={() => inputHandler("8")}
                        />
                    </div>
                    <div className="col-xs-3">
                        <RoundedNumbers
                            backgroundColor={'lightgrey'}
                            label={"9"}
                            color={'black'}
                            fontSize={"40px"}
                            setNumbers={() => inputHandler('9')}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'red'}
                            color={'white'}
                            fontSize={"0px"}
                            setNumbers={() => inputHandler("*")}
                        >
                            <Times />
                        </Rounded>

                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-3">
                        <RoundedNumbers
                            backgroundColor={'lightgrey'}
                            label={"4"}
                            color={'black'}
                            fontSize={"40px"}
                            setNumbers={() => inputHandler('4')}
                        />
                    </div>
                    <div className="col-xs-3">
                        <RoundedNumbers
                            backgroundColor={'lightgrey'}
                            label={"5"}
                            color={'black'}
                            fontSize={"40px"}
                            setNumbers={() => inputHandler('5')}
                        />
                    </div>
                    <div className="col-xs-3">
                        <RoundedNumbers
                            backgroundColor={'lightgrey'}
                            label={"6"}
                            color={'black'}
                            fontSize={"40px"}
                            setNumbers={() => inputHandler('6')}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'red'}
                            color={'white'}
                            fontSize={"0px"}
                            setNumbers={() => inputHandler('-')}
                        >
                            <Minus />
                        </Rounded>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-3">
                        <RoundedNumbers
                            backgroundColor={'lightgrey'}
                            label={"1"}
                            color={'black'}
                            fontSize={"40px"}
                            setNumbers={() => inputHandler('1')}
                        />
                    </div>
                    <div className="col-xs-3">
                        <RoundedNumbers
                            backgroundColor={'lightgrey'}
                            label={"2"}
                            color={'black'}
                            fontSize={"40px"}
                            setNumbers={() => inputHandler('2')}
                        />
                    </div>
                    <div className="col-xs-3">
                        <RoundedNumbers
                            backgroundColor={'lightgrey'}
                            label={"3"}
                            color={'black'}
                            fontSize={"40px"}
                            setNumbers={() => inputHandler('3')}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'red'}
                            color={'white'}
                            fontSize={"0px"}
                            setNumbers={() => inputHandler('+')}
                        >
                            <Plus />
                        </Rounded>

                    </div>
                </div> <br />
                <div className="row">
                    <div className="col-xs-6">
                        <Prolate
                            backgroundColor={'lightgrey'}
                            label={"0"}
                            setNumbers={() => inputHandler('0')}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'lightgrey'}
                            color={'black'}
                            fontSize={"0px"}
                            setNumbers={() => inputHandler('.')}
                        >
                            <Dot />
                        </Rounded>

                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'red'}
                            color={'white'}
                            fontSize={"0px"}
                            setNumbers={() => inputHandler('=')}
                        >
                            <Equal />
                        </Rounded>

                    </div>
                </div>
            </div>
        </div>
    );
}
