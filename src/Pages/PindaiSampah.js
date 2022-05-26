import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  InputGroup,
} from '@chakra-ui/react';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FiFile } from 'react-icons/fi';

class PindaiSampah extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files[]', file);
    });
    this.setState({
      uploading: true,
    });
    // You can use any AJAX library you like
    fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(() => {
        this.setState({
          fileList: [],
        });
        console.log('upload successfully.');
      })
      .catch(() => {
        console.log('upload failed.');
      })
      .finally(() => {
        this.setState({
          uploading: false,
        });
      });
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };
    return (
      <div>
        <Navbar />
        <main>
          <Center py={6}>
            <Box
              maxW={'320px'}
              w={'full'}
              boxShadow={'2xl'}
              rounded={'lg'}
              p={6}
              textAlign={'center'}
            >
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Select File</Button>
              </Upload>
              <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                  flex={1}
                  fontSize={'sm'}
                  rounded={'full'}
                  _focus={{
                    bg: 'gray.200',
                  }}
                  type="primary"
                  onClick={this.handleUpload}
                  disabled={fileList.length === 0}
                  loading={uploading}
                  style={{ marginTop: 16 }}
                >
                  {uploading ? 'Uploading' : 'Start Upload'}
                </Button>
              </Stack>
            </Box>
          </Center>
        </main>
        <Footer />
      </div>
    );
  }
}

export default PindaiSampah;
