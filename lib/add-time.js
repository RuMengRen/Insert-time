'use babel';

import AddTimeView from './add-time-view';
import { CompositeDisposable } from 'atom';

export default {

  addTimeView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'add-time:currentTime': () => this.currentTime()
    }));
  },
  //插入时间
  currentTime() {
    editor = atom.workspace.getActivePaneItem();
    date=new Date();
    month=JSON.stringify(date.getMonth()+1);
    day=JSON.stringify(date.getDate());
    hours=JSON.stringify(date.getHours());
    minutes=JSON.stringify(date.getMinutes());
    seconds=JSON.stringify(date.getSeconds());
    editor.insertText(
      date.getFullYear()+"/"+
    (month.length==1?"0"+month:month)+"/"+
    (day.length==1?"0"+day:day)+" "+
    (hours.length==1?"0"+hours:hours)+":"+
    (minutes.length==1?"0"+minutes:minutes)+":"+
    (seconds.length==1?"0"+seconds:seconds)
  );
  }

};
