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
import "./Option.css"

export interface OptionProps {
    label: string,
    clickHandler: (e: any) => void
}

const Option = (props: OptionProps) => {
    const highlight = (e: any) => {
        console.log('==> e', e)
        e.target.style.backgroundColor = 'rgb(85, 134, 51)'
    }

    const unhighlight = (e: any) => {
        e.target.style.backgroundColor = 'transparent'
    }

    return (
        <a onClick={props.clickHandler} onMouseOver={highlight} onMouseLeave={unhighlight}>
            {props.label}
        </a>
    )
}

export default Option
