import { SpecViewType } from '../../infra/specview/SpecView';
import { SpecDataView } from '../../infra/specview/SpecDataView';

const SVPollBrowser = () => {

    let svBrowser = new SpecDataView( 'poll', '', SpecViewType.OBJECT );  
    svBrowser.addString( 'poll_id', 'poll', '' );  
    svBrowser.addString( 'poll_description', 'poll', '' );
    
    return svBrowser;

}

const SVPoll = () => {

    let svPoll = new SpecDataView( 'poll', '', SpecViewType.OBJECT );
    svPoll.addString( 'poll_description', 'poll', '', false, 0, 50 );

    return svPoll;

}

export const SpecViewPollBrowser = SVPollBrowser();
export const SpecViewPoll = SVPoll();



