import React from 'react';
import './indexx.css'; // Assuming your custom CSS is in App.css or another CSS file

const ExampleComponent: React.FC = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image-section">
              <img src="/lukis4.png" alt="Example" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="content-text">
              <h2>The Potato Eaters, 1885</h2>
              <p>Vincent Van Gogh membuat lukisan ini dengan tujuan untuk menggambarkan keluarga petani desa dalam suasana alami mereka, yakni saat sedang makan. 
              Quisque ac tempus erat, non pellentesque quam. Donec eget mi at mi gravida posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="content-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt elit leo, nec hendrerit velit varius in. Maecenas molestie fermentum congue. In hac habitasse platea dictumst. Maecenas varius, odio ac tempus fermentum, risus arcu elementum metus, ac viverra eros lacus sit amet leo. In blandit ante dui, vitae consectetur libero molestie et. Aliquam pulvinar pharetra molestie. Vestibulum tortor augue, sagittis nec leo nec, laoreet vehicula augue. Morbi varius ullamcorper justo, sit amet leo in blandit varius odio in ullamcorper magna tincidunt a. <br>
              </br>
              </p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt elit leo, nec hendrerit velit varius in. Maecenas molestie fermentum congue. In hac habitasse platea dictumst. Maecenas varius, odio ac tempus fermentum, risus arcu elementum metus, ac viverra eros lacus sit amet leo. In blandit ante dui, vitae consectetur libero molestie et. Aliquam pulvinar pharetra molestie. Vestibulum tortor augue, sagittis nec leo nec, laoreet vehicula augue. Morbi varius ullamcorper justo, sit amet leo in blandit varius odio in ullamcorper magna tincidunt a.</p>
              <button className="quiz-button">Start Quiz</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
