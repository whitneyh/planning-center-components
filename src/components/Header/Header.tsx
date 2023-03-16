/*
 * Copyright 2023 Whitney Hunter
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import "./Header.css"
import {Box, Button} from "@mui/material";
import Option from "./Option";

export interface HeaderProps {

}

const Header = (props: HeaderProps) => {
    return (
        <header className='app-header'>
            <Box className='topbar-container'>
                <Box className='simple' sx={{
                    alignItems: 'center',
                    color: 'white',
                    display: 'flex',
                    height: '48px',
                    position: 'relative',
                    paddingLeft: '8px',
                    paddingRight: '24px',
                    zIndex: '1000'
                }}>
                    <Button sx={{
                        color: 'inherit',
                        padding: '0 16px',
                    }}>Security</Button>
                    <Option label='Team Guide' clickHandler={(e) => console.log('team guide', e)}/>
                    <Option label='Sunday Checklist' clickHandler={(e) => console.log('checklist', e)}/>
                </Box>
            </Box>
        </header>
    )
}

export default Header
