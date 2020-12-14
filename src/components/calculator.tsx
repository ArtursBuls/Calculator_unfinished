import React from 'react';
import 'flexboxgrid';
import { Rounded } from './buttons/rounded';
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
import { UserInput } from '../components/inputs/userInput';
import '../components/calculator.css';

export function Calculator() {
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
                        <Small
                            label={<Sun />}
                        />
                    </div>
                </div>
                <br />
                <div className="row between-xs">
                    <div className="col-xs-1">
                        <Small
                            label={<Moon />}
                        />
                    </div>
                    <div className="col-xs-8">
                        <UserInput />
                    </div>
                </div>
                <div className="row end-xs">
                    <div className="col-xs-12">
                        <h3
                            className='result'
                        >
                            240
                        </h3>
                    </div>
                </div>
                <div className="divider-line"></div>
                <br />
                <div className="row">
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'black'}
                            label={'C'}
                            color={'white'}
                            fontSize={"40px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'black'}
                            label={<Percent />}
                            color={'white'}
                            fontSize={"0px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'black'}
                            label={<PlusMinus />}
                            color={'white'}
                            fontSize={"0px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'red'}
                            label={<Divide />}
                            color={'white'}
                            fontSize={"0px"}
                        />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'lightgrey'}
                            label={'7'}
                            color={'black'}
                            fontSize={"40px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'lightgrey'}
                            label={'8'}
                            color={'black'}
                            fontSize={"40px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'lightgrey'}
                            label={'9'}
                            color={'black'}
                            fontSize={"40px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'red'}
                            label={<Times />}
                            color={'white'}
                            fontSize={"0px"}
                        />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'lightgrey'}
                            label={'4'}
                            color={'black'}
                            fontSize={"40px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'lightgrey'}
                            label={'5'}
                            color={'black'}
                            fontSize={"40px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'lightgrey'}
                            label={'6'}
                            color={'black'}
                            fontSize={"40px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'red'}
                            label={<Minus />}
                            color={'white'}
                            fontSize={"0px"}
                        />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'lightgrey'}
                            label={'1'}
                            color={'black'}
                            fontSize={"40px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'lightgrey'}
                            label={'2'}
                            color={'black'}
                            fontSize={"40px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'lightgrey'}
                            label={'3'}
                            color={'black'}
                            fontSize={"40px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'red'}
                            label={<Plus />}
                            color={'white'}
                            fontSize={"0px"}
                        />
                    </div>
                </div> <br />
                <div className="row">
                    <div className="col-xs-6">
                        <Prolate
                            backgroundColor={'lightgrey'}
                            label={'0'}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'lightgrey'}
                            label={<Dot />}
                            color={'black'}
                            fontSize={"0px"}
                        />
                    </div>
                    <div className="col-xs-3">
                        <Rounded
                            backgroundColor={'red'}
                            label={<Equal />}
                            color={'white'}
                            fontSize={"0px"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
