// @flow
import React, { Component } from 'react';
import "./home.global.css"
import {  BrowserWindow } from 'electron';
const { shell } = require('electron')

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    // return <Home />;

    return <div>
        <div id="loading">
          <div id="loading-center">
            <div id="loading-center-absolute">
              <div className="object" id="object_one"></div>
              <div className="object" id="object_two"></div>
              <div className="object" id="object_three"></div>
              <div className="object" id="object_four"></div>
              <div className="object" id="object_five"></div>
              <div className="object" id="object_six"></div>
              <div className="object" id="object_seven"></div>
              <div className="object" id="object_eight"></div>
              <div className="object" id="object_big"></div>
            </div>
          </div>
        </div>
        <webview
        ref={(me)=>{
          if(me){
            const loadstop = () => {
              document.querySelector("#loading").style.display = "none";
            }
            const loadstart = () => {
              document.querySelector("#loading").style.display = "block";
            }
            me.addEventListener('did-start-loading', loadstart)
            me.addEventListener('did-stop-loading', loadstop)


            // BrowserWindow.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
            //   if (frameName === 'modal') {
            //     // open window as modal
            //     event.preventDefault()
            //     Object.assign(options, {
            //       modal: true,
            //       parent: BrowserWindow,
            //       width: 100,
            //       height: 100
            //     })
            //     event.newGuest = new BrowserWindow(options)
            //   }
            // })

          }
        }}
        src={`http://10.80.245.98?t=${new Date().getTime}`}
        // src={`http://127.0.0.1?t=${new Date().getTime}`}
        disablewebsecurity="true"
        nodeintegration="true"
        allowpopups="true"
        style={{width:"100vw", height:"100vh"}}></webview>
    </div>
  }
}
