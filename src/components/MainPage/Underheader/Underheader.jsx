import "./Underheader.css"
import {Image} from "@mui/icons-material";
import {Button, List, ListItem} from "@mui/material";
import {grey} from "@mui/material/colors";
const Underheader = () => {
    return(
        <div className="Underheader">
            <div className="underheader_btns">
                <List>
                    <ListItem>
                        <Button variant="text" className="header_btn" sx={{color: grey[700], width: 90, height: 71}}>Новинки</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="text" className="header_btn" sx={{color: grey[700], width: 90, height: 71}}>Популярне</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="text" className="header_btn" sx={{color: grey[700], width: 90, height: 71}}>Найбільше переглядів</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="text" className="header_btn" sx={{color: grey[700], width: 90, height: 71}}>Колекції користувачів</Button>
                    </ListItem>
                </List>
            </div>
        </div>
    );
}
export default Underheader;
