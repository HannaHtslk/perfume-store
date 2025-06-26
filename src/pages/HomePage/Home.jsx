import {
  Box,
  Typography,
  Button,
  Stack,
  Slide,
  Fade,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Tooltip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/products/operations';
import {
  selectProducts,
  selectProductsLoading,
} from '@/redux/products/selectors';
import { PageBackground } from '@/components/PageBackground/PageBackground';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './Home.module.css';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Home = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showFeatured, setShowFeatured] = useState(false);

  const products = useSelector(selectProducts);
  const loading = useSelector(selectProductsLoading);

  // Get first 10 products for featured section
  const featuredProducts = products.slice(0, 10);

  useEffect(() => {
    // Fetch products if not already loaded
    if (products.length === 0) {
      dispatch(fetchProducts());
    }

    // Animation timings
    setTimeout(() => setShowTitle(true), 300);
    setTimeout(() => setShowContent(true), 600);
    setTimeout(() => setShowFeatured(true), 900);
  }, [dispatch, products.length]);

  const handleShopNowClick = () => {
    navigate('/catalogue');
  };

  const handleViewAllClick = () => {
    navigate('/catalogue');
  };

  const handleAddToCart = product => {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', product);
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <PageBackground>
        <Box className={styles.container}>
          <Stack spacing={3} className={styles.heroContent}>
            <Slide direction="right" in={showTitle} timeout={800}>
              <Typography
                variant="h2"
                fontWeight={700}
                className={styles.title}
              >
                Welcome to Perfume Store
              </Typography>
            </Slide>

            <Slide direction="left" in={showContent} timeout={800}>
              <Box>
                <Typography variant="h5" className={styles.subtitle}>
                  Discover our exclusive collection of fragrances for every mood
                  and occasion.
                </Typography>
                <Fade in={showContent} timeout={1200}>
                  <Button
                    variant="contained"
                    color="inherit"
                    size="large"
                    onClick={handleShopNowClick}
                    className={styles.shopNowButton}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      backdropFilter: 'blur(5px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      color: theme.palette.primary.contrastText,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      },
                    }}
                  >
                    Shop Now
                  </Button>
                </Fade>
              </Box>
            </Slide>
          </Stack>

          <Box className={`${styles.quoteContainer} ${styles.hiddenOnMobile}`}>
            <Typography variant="h6" className={styles.quote}>
              &ldquo;Elegance is when the inside is as beautiful as the
              outside&rdquo;
            </Typography>
            <Typography variant="subtitle2" className={styles.quoteAuthor}>
              — COCO CHANEL
            </Typography>
          </Box>
        </Box>
      </PageBackground>

      {/* Featured Products Section as Swiper Carousel */}
      <Fade in={showFeatured} timeout={1000}>
        <Box className={styles.featuredSection}>
          <Box className={styles.featuredContainer}>
            <Box className={styles.sectionHeader}>
              <Typography variant="h3" className={styles.sectionTitle}>
                Featured Products
              </Typography>
              <Typography variant="h6" className={styles.sectionSubtitle}>
                Discover our most popular fragrances
              </Typography>
            </Box>

            {loading ? (
              <Box className={styles.loadingContainer}>
                <Typography variant="h6">
                  Loading featured products...
                </Typography>
              </Box>
            ) : (
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={24}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                  600: { slidesPerView: 2 },
                  900: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
                className={styles.productsCarousel}
              >
                {featuredProducts.map(product => (
                  <SwiperSlide key={product.id}>
                    <Card className={styles.productCard}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={product.imageUrl}
                        alt={product.name}
                        className={styles.productImage}
                      />
                      <CardContent className={styles.productContent}>
                        <Typography variant="h6" className={styles.productName}>
                          {product.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          className={styles.productDescription}
                        >
                          {product.description.length > 80
                            ? `${product.description.substring(0, 80)}...`
                            : product.description}
                        </Typography>
                        <Box className={styles.productFooter}>
                          <Typography
                            variant="h6"
                            className={styles.productPrice}
                          >
                            ${product.price}
                          </Typography>
                          <Tooltip title="Add to Cart">
                            <IconButton
                              className={styles.addToCartButton}
                              onClick={() => handleAddToCart(product)}
                            >
                              <ShoppingCartIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </CardContent>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <Box className={styles.viewAllContainer}>
              <Button
                variant="outlined"
                size="large"
                onClick={handleViewAllClick}
                className={styles.viewAllButton}
                endIcon={<ArrowForwardIcon />}
              >
                View All Products
              </Button>
            </Box>
          </Box>
        </Box>
      </Fade>
    </>
  );
};
