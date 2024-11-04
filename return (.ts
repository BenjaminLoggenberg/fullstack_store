return (
        <>
<<<<<<< Updated upstream
        <h1>Products Page</h1>
        <Grid container spacing={3} style={{ padding: 20 }}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={product.name}
                            height="140"
                            image={product.imageUrl}
=======
            <h1>Products Page</h1>
            <Grid container spacing={3} style={{ padding: 20 }}>
                {products.map((product) => (

@@ -108,7 +96,6 @@ const Products = () => {
                                alt={product.name}
                                height="140"
                                image={product.image_url}
>>>>>>> Stashed changes
                            />
                        <CardContent>
                            <Typography variant="h6" component="div">




                            const teamMembers = [
    {
<<<<<<< Updated upstream
        name: 'Alice Johnson',
        role: 'CEO',
        imageUrl: 'https://via.placeholder.com/400x300',
        alt: 'Alice Johnson',
    },
    {
        name: 'Bob Smith',
        role: 'CTO',
        imageUrl: 'https://via.placeholder.com/400x300',
        alt: 'Bob Smith',
    },
    {
        name: 'Carol Lee',
        role: 'Designer',
        imageUrl: 'https://via.placeholder.com/400x300',
        alt: 'Carol Lee',
=======
        name: 'John Wonders',
        role: 'CEO',
        imageUrl: '/images/images.jpeg',

@@ -33,7 +15,6 @@ const teamMembers = [
        role: 'CTO',
        imageUrl: '/images/Profile-Pic-square.png',
        alt: 'Kim Wonders',
>>>>>>> Stashed changes
    },
];



@@ -72,8 +53,6 @@ const About = () => {
                        </Card>
                    </Grid>
                ))}
<<<<<<< Updated upstream
=======
  <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
              
            </Typography>

@@ -81,7 +60,6 @@ const About = () => {
                At Online Fanatics, we specialize in offering a wide range of exquisite items, catering to the finest tastes. Our mission is to provide unique, items that reflect individuality and elegance.
            </Typography>

>>>>>>> Stashed changes
            </Grid>
        </Container>
    );


    return (
        <>
            <h1>Products Page</h1>
            <Grid container spacing={3} style={{ padding: 20 }}>
                {products.map((product) => (

@@ -108,7 +96,6 @@ const Products = () => {
                                alt={product.name}
                                height="140"
                                image={product.image_url}
                            />
                        <CardContent>
                            <Typography variant="h6" component="div">