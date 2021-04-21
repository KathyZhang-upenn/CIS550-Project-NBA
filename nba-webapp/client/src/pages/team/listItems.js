import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import ALT from "../../Icons/atl"
import BOS from "../../Icons/bos"
import BKN from "../../Icons/bkn"
import CHA from "../../Icons/cha"
import CHI from "../../Icons/chi"
import CLE from "../../Icons/cle"
import DAL from "../../Icons/dal"
import DEN from "../../Icons/den"
import DET from "../../Icons/det"
import GSW from "../../Icons/gsw"
import HOU from "../../Icons/hou"
import IND from "../../Icons/ind"
import LAC from "../../Icons/lac"
import LAL from "../../Icons/lal"
import MEM from "../../Icons/mem"
import MIA from "../../Icons/mia"
import MIL from "../../Icons/mil"
import MIN from "../../Icons/min"
import NOP from "../../Icons/nop"
import NYK from "../../Icons/nyk"
import OKC from "../../Icons/okc"
import ORL from "../../Icons/orl"
import PHI from "../../Icons/phi"
import PHX from "../../Icons/phx"
import POR from "../../Icons/por"
import SAC from "../../Icons/sac"
import SAS from "../../Icons/sas"
import TOR from "../../Icons/tor"
import UTA from "../../Icons/uta"
import WAS from "../../Icons/was"

var size = 50;

const TeamList = (props) => {

    const clickALT = () => {
        props.onClickTeam("Atlanta Hawks", "1610612737")
    }
    const clickBKN = () => {
        props.onClickTeam("Brooklyn	Nets", "1610612751")
    }
    const clickBOS = () => {
        props.onClickTeam("Boston Celtics", "1610612738")
    }
    const clickCHA = () => {
        props.onClickTeam("Charlotte Hornets", "1610612766")
    }
    const clickCHI = () => {
        props.onClickTeam("Chicago Bulls", "1610612741")
    }
    const clickCLE = () => {
        props.onClickTeam("Cleveland Cavaliers", "1610612739")
    }
    const clickDAL = () => {
        props.onClickTeam("Dallas Mavericks", "1610612742")
    }
    const clickDEN = () => {
        props.onClickTeam("Denver Nuggets", "1610612743")
    }
    const clickDET = () => {
        props.onClickTeam("Detroit Pistons", "1610612765")
    }
    const clickGSW = () => {
        props.onClickTeam("Golden State	Warriors", "1610612744")
    }
    const clickHOU = () => {
        props.onClickTeam("Houston Rockets", "1610612745")
    }
    const clickIND = () => {
        props.onClickTeam("Indiana Pacers", "1610612754")
    }
    const clickLAC = () => {
        props.onClickTeam("Los Angeles Clippers", "1610612746")
    }
    const clickLAL = () => {
        props.onClickTeam("Los Angeles Lakers", "1610612747")
    }
    const clickMEM = () => {
        props.onClickTeam("Memphis Grizzlies", "1610612763")
    }
    const clickMIA = () => {
        props.onClickTeam("Miami Heat", "1610612748")
    }
    const clickMIL = () => {
        props.onClickTeam("Milwaukee Bucks", "1610612749")
    }
    const clickMIN = () => {
        props.onClickTeam("Minnesota Timberwolves", "1610612750")
    }
    const clickNOP = () => {
        props.onClickTeam("New Orleans Pelicans", "1610612740")
    }
    const clickNYK = () => {
        props.onClickTeam("New York	Knicks", "1610612752")
    }
    const clickOKC = () => {
        props.onClickTeam("Oklahoma City Thunder", "1610612760")
    }
    const clickORL = () => {
        props.onClickTeam("Orlando Magic", "1610612753")
    }
    const clickPHI = () => {
        props.onClickTeam("Philadelphia 76ers", "1610612755")
    }
    const clickPHX = () => {
        props.onClickTeam("Phoenix Suns", "1610612756")
    }
    const clickPOR = () => {
        props.onClickTeam("Portland	Trail Blazers", "1610612757")
    }
    const clickSAC = () => {
        props.onClickTeam("Sacramento Kings", "1610612758")
    }
    const clickSAS = () => {
        props.onClickTeam("San Antonio Spurs", "1610612759")
    }
    const clickTOR = () => {
        props.onClickTeam("Toronto Raptors", "1610612761")
    }
    const clickUTA = () => {
        props.onClickTeam("Utah	Jazz", "1610612762")
    }
    const clickWAS = () => {
        props.onClickTeam("Washington Wizards", "1610612764")
    }

    return (<div>
        <ListItem button onClick={clickALT}>
            <ListItemIcon size = {2}>
                <ALT size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Atlanta Hawks" />
        </ListItem>
        <ListItem button onClick={clickBOS}>
            <ListItemIcon>
                <BOS size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Boston Celtics" />
        </ListItem>
        <ListItem button onClick={clickBKN}>
            <ListItemIcon>
                <BKN size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Brooklyn	Nets" />
        </ListItem>
        <ListItem button onClick={clickCHA}>
            <ListItemIcon>
                <CHA size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Charlotte Hornets" />
        </ListItem>
        <ListItem button onClick={clickCHI}>
            <ListItemIcon>
                <CHI size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Chicago Bulls" />
        </ListItem>
        <ListItem button onClick={clickCLE}>
            <ListItemIcon>
                <CLE size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Cleveland Cavaliers" />
        </ListItem>
        <ListItem button onClick={clickDAL}>
            <ListItemIcon>
                <DAL size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Dallas Mavericks" />
        </ListItem>
        <ListItem button onClick={clickDEN}>
            <ListItemIcon>
                <DEN size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Denver Nuggets" />
        </ListItem>
        <ListItem button onClick={clickDET}>
            <ListItemIcon>
                <DET size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Detroit Pistons" />
        </ListItem>
        <ListItem button onClick={clickGSW}>
            <ListItemIcon>
                <GSW size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Golden State	Warriors" />
        </ListItem>
        <ListItem button onClick={clickHOU}>
            <ListItemIcon>
                <HOU size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Houston Rockets" />
        </ListItem>
        <ListItem button onClick={clickIND}>
            <ListItemIcon>
                <IND size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Indiana Pacers" />
        </ListItem>
        <ListItem button onClick={clickLAC}>
            <ListItemIcon>
                <LAC size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Los Angeles Clippers" />
        </ListItem>
        <ListItem button onClick={clickLAL}>
            <ListItemIcon>
                <LAL size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Los Angeles Lakers" />
        </ListItem>
        <ListItem button onClick={clickMEM}>
            <ListItemIcon>
                <MEM size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Memphis Grizzlies" />
        </ListItem>
        <ListItem button onClick={clickMIA}>
            <ListItemIcon>
                <MIA size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Miami Heat" />
        </ListItem>
        <ListItem button onClick={clickMIL}>
            <ListItemIcon>
                <MIL size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Milwaukee Bucks" />
        </ListItem>
        <ListItem button onClick={clickMIN}>
            <ListItemIcon>
                <MIN size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Minnesota Timberwolves" />
        </ListItem>
        <ListItem button onClick={clickNOP}>
            <ListItemIcon>
                <NOP size = {size}/>
            </ListItemIcon>
            <ListItemText primary="New Orleans Pelicans" />
        </ListItem>
        <ListItem button onClick={clickNYK}>
            <ListItemIcon>
                <NYK size = {size}/>
            </ListItemIcon>
            <ListItemText primary="New York	Knicks" />
        </ListItem>
        <ListItem button onClick={clickOKC}>
            <ListItemIcon>
                <OKC size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Oklahoma City Thunder" />
        </ListItem>
        <ListItem button onClick={clickORL}>
            <ListItemIcon>
                <ORL size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Orlando Magic" />
        </ListItem>
        <ListItem button onClick={clickPHI}>
            <ListItemIcon>
                <PHI size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Philadelphia 76ers" />
        </ListItem>
        <ListItem button onClick={clickPHX}>
            <ListItemIcon>
                <PHX size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Phoenix Suns" />
        </ListItem>
        <ListItem button onClick={clickPOR}>
            <ListItemIcon>
                <POR size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Portland	Trail Blazers" />
        </ListItem>
        <ListItem button onClick={clickSAC}>
            <ListItemIcon>
                <SAC size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Sacramento Kings" />
        </ListItem>
        <ListItem button onClick={clickSAS}>
            <ListItemIcon>
                <SAS size = {size}/>
            </ListItemIcon>
            <ListItemText primary="San Antonio Spurs" />
        </ListItem>
        <ListItem button onClick={clickTOR}>
            <ListItemIcon>
                <TOR size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Toronto Raptors" />
        </ListItem>
        <ListItem button onClick={clickUTA}>
            <ListItemIcon>
                <UTA size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Utah	Jazz" />
        </ListItem>
        <ListItem button onClick={clickWAS}>
            <ListItemIcon>
                <WAS size = {size}/>
            </ListItemIcon>
            <ListItemText primary="Washington Wizards" />
        </ListItem>
    </div>
    )
};

export default TeamList;