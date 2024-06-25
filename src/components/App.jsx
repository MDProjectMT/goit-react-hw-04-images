import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getImages } from './Pixabay/Pixabay';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      images: [],
      inputValue: '',
      isLoading: false,
    };
  }

  handleSubmit = async (ev, inputValue) => {
    ev.preventDefault();
    this.setState({ isLoading: true });
    const images = await getImages(this.state.page, inputValue);
    this.setState({
      images: images,
      inputValue: inputValue,
      isLoading: false,
    });
  };

  handleLoudMore = ev => {
    ev.preventDefault();
    this.setState({ isLoading: true });
    this.setState(prev => ({
      ...prev,
      page: prev.page + 1,
      isLoading: false,
    }));
  };

  componentDidUpdate = async (_prevProps, prevState) => {
    if (this.state.page !== prevState.page) {
      const { page, images, inputValue } = this.state;
      const newImages = await getImages(page, inputValue);
      this.setState({ images: [...images, ...newImages], isLoading: false });
    }
  };

  render() {
    return (
      <>
        <div
          style={{
            height: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          React homework-04 Image
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Searchbar onSubmit={this.handleSubmit} />
        </div>
        <div>
          <ImageGallery images={this.state.images} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Button
            onClick={this.handleLoudMore}
            page={this.state.page}
            images={this.state.images}
          />
          <Loader isLoading={this.state.isLoading} />
        </div>
      </>
    );
  }
}
