import { DinnerDining, Folder, Menu, MenuBook, Shop2 } from '@mui/icons-material';
import {
  AppBar, Avatar, Box, Button, Card, CardContent,
  CardHeader, CardMedia, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import './App.css';

function App() {

  interface Ingredient {
    name: string;
    quantity: number;
    unit: string;
    price: number;
  };
  const pasta_ingredients = [
    "Pasta",
    "Salt",
    "Pepper",
    "Tomato Sauce",
  ]

  const ingredient: Ingredient = {
    name: "Pasta",
    quantity: 1,
    unit: "lb",
    price: 1.99,
  }

  const chicken_ingredients = [
    ingredient,
    {
      name: "Chicken",
      quantity: 1,
      unit: "lb",
      price: 2.99,
    }
  ];


  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping List
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2}>
        <Grid size={6}>
          <Card className="card" variant="outlined" >
            <CardHeader
              title="Pasta"
              avatar={<Avatar><MenuBook /></Avatar>}
              slotProps={{ sx: { width: 40, height: 40, } }}
            />
            <CardMedia
              component="img"
              height="194"
              image="./src/assets/red-sauce-pasta-1.jpg"
            >
            </CardMedia>
            <CardContent>

              <List>
                {pasta_ingredients.map((ingredient, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <DinnerDining />
                    </ListItemIcon>
                    <ListItemText primary={ingredient} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={6}>
          <Card className="card" variant="outlined" >
            <CardHeader
              avatar={<Avatar><Folder /></Avatar>}
              title="Shop 2"
            />
            <CardMedia
              component="img"
              height="194"
              image="./src/assets/red-sauce-pasta-1.jpg"
            >
            </CardMedia>
            <CardContent>
              <List>
                {chicken_ingredients.map((ingredient, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Shop2 />
                    </ListItemIcon>
                    <ListItemText primary={ingredient.name} secondary={ingredient.price} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
