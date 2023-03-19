import { makeStyles } from '@mui/styles';

const useStyles =makeStyles((theme)=>
({
        appBar:{
        position: 'absolute',  top: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0',
        height:'130px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#263238',
        flexDirection: 'row',
        direction:"row",
        justifyContent:"center",
        alignItems:"flex-end",
        },
        descriere:
        {
        fontFamily: 'Arial',
        fontSize: '36px',
        }
}
))


export default useStyles;