import React from 'react'
import { IoIosBed } from "react-icons/io"
import {FaPlane} from "react-icons/fa"
import {BiCar} from "react-icons/bi"
import {GiBarracksTent} from "react-icons/gi"
import { Icon } from '@iconify/react'

export const navigationFooter = [
    {
      "name": "stays",
      "path": "/",
      "image": <IoIosBed style = {{color: 'white', fontSize: '22px'}}/>
    },
    {
      "name": "flights",
      "path": "/flights",
      "image": <FaPlane style = {{color: 'white', fontSize: '22px'}}/>
    },
    {
      "name": "rent",
      "path": "/cars",
      "image": <BiCar style = {{color: 'white', fontSize: '22px'}}/>
    },
    {
      "name": "attraction",
      "path": "/atractive",
      "image": <GiBarracksTent style = {{color: 'white', fontSize: '22px'}}/>
    },
    {
      "name": "taxi",
      "path": "/taxi",
      "image": <Icon icon="cil:taxi" style = {{color: 'white', fontSize: '22px'}}/>
    }
  ]