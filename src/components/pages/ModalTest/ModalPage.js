import { useState, Fragment } from "react"
import { Button } from "@mui/material";
import { OpenWith } from "@mui/icons-material"; 
import Modal from "../../common/Modal/Modal";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    const actionBar = <div className="flex space-x-1.5">
        <Button  onClick={handleCloseModal} variant="outlined" size="large">Accept</Button>
        <Button variant="outlined" size="large">Reject</Button>

    </div>;

    const modal = <Modal actionBar={actionBar} closeModal={handleCloseModal}>
        <p>Some text</p>
    </Modal>;

    return (
        <Fragment>
            {
                showModal && modal 
            }
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque leo sit amet imperdiet imperdiet. In a nisi ac lectus hendrerit auctor. Etiam tempus commodo lacus in dignissim. Nunc feugiat orci quis tellus egestas, ut dapibus risus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse condimentum purus in nunc fermentum sollicitudin. Donec sit amet cursus dolor, vitae lobortis nisl. Aliquam erat volutpat. Proin quis tortor bibendum diam tempor vulputate a ac nunc. Sed iaculis, dolor imperdiet semper blandit, felis metus vehicula ligula, non semper justo massa eget arcu. Fusce luctus ante eu sollicitudin rhoncus. Sed feugiat sit amet arcu non dictum. Pellentesque lorem diam, sollicitudin sit amet rutrum eu, fermentum vitae ex. Duis leo augue, posuere in ullamcorper in, consequat quis tellus.

                Sed sodales quam sed egestas faucibus. Donec sed lobortis orci. Duis gravida sem turpis, faucibus convallis metus egestas eu. In efficitur turpis semper, pellentesque sem in, vestibulum ligula. Vivamus id justo mauris. Maecenas porttitor quam lacinia, elementum dolor eget, euismod lorem. Sed efficitur id elit quis tincidunt. Cras euismod leo a est mattis laoreet. Phasellus non ornare lectus. Fusce in porttitor lectus. Proin vel aliquam nibh. Aliquam ac sapien tellus. Praesent condimentum ex orci, a consectetur lectus vehicula ut. Sed pharetra elementum eros eu cursus.

                Etiam pharetra felis at gravida varius. Morbi id elit imperdiet dui venenatis consectetur. Fusce bibendum aliquet volutpat. Praesent hendrerit auctor dui vitae volutpat. Nunc mollis eget velit ut pulvinar. Fusce tempor dignissim neque eget efficitur. Quisque purus dui, condimentum nec dignissim nec, mattis ac turpis. Pellentesque ut metus auctor, hendrerit magna ac, venenatis purus.

                Fusce euismod erat et rutrum ornare. Duis ultricies odio ac aliquet semper. Nullam a posuere justo, quis gravida nisl. Etiam eu malesuada enim. Pellentesque ex nulla, bibendum suscipit finibus at, consequat nec odio. Suspendisse ac tempus libero, vel auctor dui. Ut dignissim auctor diam, in posuere tortor pulvinar non. Vestibulum volutpat neque felis, at suscipit enim molestie id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vel nulla tempor, interdum libero nec, ultrices sem.

                Ut ornare felis semper, lacinia metus lacinia, aliquam mi. Cras non laoreet odio. Suspendisse imperdiet ante sed purus iaculis ornare at ac erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque fringilla aliquet ipsum eget laoreet. Nulla vitae nisl nec tellus convallis posuere. Nullam felis nibh, hendrerit et ligula non, congue pulvinar ante. Donec dignissim mauris in erat ultrices, ac pretium turpis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut diam mi, sollicitudin vitae dignissim ac, ornare a augue.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque leo sit amet imperdiet imperdiet. In a nisi ac lectus hendrerit auctor. Etiam tempus commodo lacus in dignissim. Nunc feugiat orci quis tellus egestas, ut dapibus risus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse condimentum purus in nunc fermentum sollicitudin. Donec sit amet cursus dolor, vitae lobortis nisl. Aliquam erat volutpat. Proin quis tortor bibendum diam tempor vulputate a ac nunc. Sed iaculis, dolor imperdiet semper blandit, felis metus vehicula ligula, non semper justo massa eget arcu. Fusce luctus ante eu sollicitudin rhoncus. Sed feugiat sit amet arcu non dictum. Pellentesque lorem diam, sollicitudin sit amet rutrum eu, fermentum vitae ex. Duis leo augue, posuere in ullamcorper in, consequat quis tellus.

                Sed sodales quam sed egestas faucibus. Donec sed lobortis orci. Duis gravida sem turpis, faucibus convallis metus egestas eu. In efficitur turpis semper, pellentesque sem in, vestibulum ligula. Vivamus id justo mauris. Maecenas porttitor quam lacinia, elementum dolor eget, euismod lorem. Sed efficitur id elit quis tincidunt. Cras euismod leo a est mattis laoreet. Phasellus non ornare lectus. Fusce in porttitor lectus. Proin vel aliquam nibh. Aliquam ac sapien tellus. Praesent condimentum ex orci, a consectetur lectus vehicula ut. Sed pharetra elementum eros eu cursus.

                Etiam pharetra felis at gravida varius. Morbi id elit imperdiet dui venenatis consectetur. Fusce bibendum aliquet volutpat. Praesent hendrerit auctor dui vitae volutpat. Nunc mollis eget velit ut pulvinar. Fusce tempor dignissim neque eget efficitur. Quisque purus dui, condimentum nec dignissim nec, mattis ac turpis. Pellentesque ut metus auctor, hendrerit magna ac, venenatis purus.

                Fusce euismod erat et rutrum ornare. Duis ultricies odio ac aliquet semper. Nullam a posuere justo, quis gravida nisl. Etiam eu malesuada enim. Pellentesque ex nulla, bibendum suscipit finibus at, consequat nec odio. Suspendisse ac tempus libero, vel auctor dui. Ut dignissim auctor diam, in posuere tortor pulvinar non. Vestibulum volutpat neque felis, at suscipit enim molestie id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vel nulla tempor, interdum libero nec, ultrices sem.

                Ut ornare felis semper, lacinia metus lacinia, aliquam mi. Cras non laoreet odio. Suspendisse imperdiet ante sed purus iaculis ornare at ac erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque fringilla aliquet ipsum eget laoreet. Nulla vitae nisl nec tellus convallis posuere. Nullam felis nibh, hendrerit et ligula non, congue pulvinar ante. Donec dignissim mauris in erat ultrices, ac pretium turpis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut diam mi, sollicitudin vitae dignissim ac, ornare a augue.
            </p>


            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque leo sit amet imperdiet imperdiet. In a nisi ac lectus hendrerit auctor. Etiam tempus commodo lacus in dignissim. Nunc feugiat orci quis tellus egestas, ut dapibus risus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse condimentum purus in nunc fermentum sollicitudin. Donec sit amet cursus dolor, vitae lobortis nisl. Aliquam erat volutpat. Proin quis tortor bibendum diam tempor vulputate a ac nunc. Sed iaculis, dolor imperdiet semper blandit, felis metus vehicula ligula, non semper justo massa eget arcu. Fusce luctus ante eu sollicitudin rhoncus. Sed feugiat sit amet arcu non dictum. Pellentesque lorem diam, sollicitudin sit amet rutrum eu, fermentum vitae ex. Duis leo augue, posuere in ullamcorper in, consequat quis tellus.

                Sed sodales quam sed egestas faucibus. Donec sed lobortis orci. Duis gravida sem turpis, faucibus convallis metus egestas eu. In efficitur turpis semper, pellentesque sem in, vestibulum ligula. Vivamus id justo mauris. Maecenas porttitor quam lacinia, elementum dolor eget, euismod lorem. Sed efficitur id elit quis tincidunt. Cras euismod leo a est mattis laoreet. Phasellus non ornare lectus. Fusce in porttitor lectus. Proin vel aliquam nibh. Aliquam ac sapien tellus. Praesent condimentum ex orci, a consectetur lectus vehicula ut. Sed pharetra elementum eros eu cursus.

                Etiam pharetra felis at gravida varius. Morbi id elit imperdiet dui venenatis consectetur. Fusce bibendum aliquet volutpat. Praesent hendrerit auctor dui vitae volutpat. Nunc mollis eget velit ut pulvinar. Fusce tempor dignissim neque eget efficitur. Quisque purus dui, condimentum nec dignissim nec, mattis ac turpis. Pellentesque ut metus auctor, hendrerit magna ac, venenatis purus.

                Fusce euismod erat et rutrum ornare. Duis ultricies odio ac aliquet semper. Nullam a posuere justo, quis gravida nisl. Etiam eu malesuada enim. Pellentesque ex nulla, bibendum suscipit finibus at, consequat nec odio. Suspendisse ac tempus libero, vel auctor dui. Ut dignissim auctor diam, in posuere tortor pulvinar non. Vestibulum volutpat neque felis, at suscipit enim molestie id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vel nulla tempor, interdum libero nec, ultrices sem.

                Ut ornare felis semper, lacinia metus lacinia, aliquam mi. Cras non laoreet odio. Suspendisse imperdiet ante sed purus iaculis ornare at ac erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque fringilla aliquet ipsum eget laoreet. Nulla vitae nisl nec tellus convallis posuere. Nullam felis nibh, hendrerit et ligula non, congue pulvinar ante. Donec dignissim mauris in erat ultrices, ac pretium turpis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut diam mi, sollicitudin vitae dignissim ac, ornare a augue.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque leo sit amet imperdiet imperdiet. In a nisi ac lectus hendrerit auctor. Etiam tempus commodo lacus in dignissim. Nunc feugiat orci quis tellus egestas, ut dapibus risus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse condimentum purus in nunc fermentum sollicitudin. Donec sit amet cursus dolor, vitae lobortis nisl. Aliquam erat volutpat. Proin quis tortor bibendum diam tempor vulputate a ac nunc. Sed iaculis, dolor imperdiet semper blandit, felis metus vehicula ligula, non semper justo massa eget arcu. Fusce luctus ante eu sollicitudin rhoncus. Sed feugiat sit amet arcu non dictum. Pellentesque lorem diam, sollicitudin sit amet rutrum eu, fermentum vitae ex. Duis leo augue, posuere in ullamcorper in, consequat quis tellus.

                Sed sodales quam sed egestas faucibus. Donec sed lobortis orci. Duis gravida sem turpis, faucibus convallis metus egestas eu. In efficitur turpis semper, pellentesque sem in, vestibulum ligula. Vivamus id justo mauris. Maecenas porttitor quam lacinia, elementum dolor eget, euismod lorem. Sed efficitur id elit quis tincidunt. Cras euismod leo a est mattis laoreet. Phasellus non ornare lectus. Fusce in porttitor lectus. Proin vel aliquam nibh. Aliquam ac sapien tellus. Praesent condimentum ex orci, a consectetur lectus vehicula ut. Sed pharetra elementum eros eu cursus.

                Etiam pharetra felis at gravida varius. Morbi id elit imperdiet dui venenatis consectetur. Fusce bibendum aliquet volutpat. Praesent hendrerit auctor dui vitae volutpat. Nunc mollis eget velit ut pulvinar. Fusce tempor dignissim neque eget efficitur. Quisque purus dui, condimentum nec dignissim nec, mattis ac turpis. Pellentesque ut metus auctor, hendrerit magna ac, venenatis purus.

                Fusce euismod erat et rutrum ornare. Duis ultricies odio ac aliquet semper. Nullam a posuere justo, quis gravida nisl. Etiam eu malesuada enim. Pellentesque ex nulla, bibendum suscipit finibus at, consequat nec odio. Suspendisse ac tempus libero, vel auctor dui. Ut dignissim auctor diam, in posuere tortor pulvinar non. Vestibulum volutpat neque felis, at suscipit enim molestie id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vel nulla tempor, interdum libero nec, ultrices sem.

                Ut ornare felis semper, lacinia metus lacinia, aliquam mi. Cras non laoreet odio. Suspendisse imperdiet ante sed purus iaculis ornare at ac erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque fringilla aliquet ipsum eget laoreet. Nulla vitae nisl nec tellus convallis posuere. Nullam felis nibh, hendrerit et ligula non, congue pulvinar ante. Donec dignissim mauris in erat ultrices, ac pretium turpis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut diam mi, sollicitudin vitae dignissim ac, ornare a augue.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque leo sit amet imperdiet imperdiet. In a nisi ac lectus hendrerit auctor. Etiam tempus commodo lacus in dignissim. Nunc feugiat orci quis tellus egestas, ut dapibus risus vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse condimentum purus in nunc fermentum sollicitudin. Donec sit amet cursus dolor, vitae lobortis nisl. Aliquam erat volutpat. Proin quis tortor bibendum diam tempor vulputate a ac nunc. Sed iaculis, dolor imperdiet semper blandit, felis metus vehicula ligula, non semper justo massa eget arcu. Fusce luctus ante eu sollicitudin rhoncus. Sed feugiat sit amet arcu non dictum. Pellentesque lorem diam, sollicitudin sit amet rutrum eu, fermentum vitae ex. Duis leo augue, posuere in ullamcorper in, consequat quis tellus.

                Sed sodales quam sed egestas faucibus. Donec sed lobortis orci. Duis gravida sem turpis, faucibus convallis metus egestas eu. In efficitur turpis semper, pellentesque sem in, vestibulum ligula. Vivamus id justo mauris. Maecenas porttitor quam lacinia, elementum dolor eget, euismod lorem. Sed efficitur id elit quis tincidunt. Cras euismod leo a est mattis laoreet. Phasellus non ornare lectus. Fusce in porttitor lectus. Proin vel aliquam nibh. Aliquam ac sapien tellus. Praesent condimentum ex orci, a consectetur lectus vehicula ut. Sed pharetra elementum eros eu cursus.

                Etiam pharetra felis at gravida varius. Morbi id elit imperdiet dui venenatis consectetur. Fusce bibendum aliquet volutpat. Praesent hendrerit auctor dui vitae volutpat. Nunc mollis eget velit ut pulvinar. Fusce tempor dignissim neque eget efficitur. Quisque purus dui, condimentum nec dignissim nec, mattis ac turpis. Pellentesque ut metus auctor, hendrerit magna ac, venenatis purus.

                Fusce euismod erat et rutrum ornare. Duis ultricies odio ac aliquet semper. Nullam a posuere justo, quis gravida nisl. Etiam eu malesuada enim. Pellentesque ex nulla, bibendum suscipit finibus at, consequat nec odio. Suspendisse ac tempus libero, vel auctor dui. Ut dignissim auctor diam, in posuere tortor pulvinar non. Vestibulum volutpat neque felis, at suscipit enim molestie id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vel nulla tempor, interdum libero nec, ultrices sem.

                Ut ornare felis semper, lacinia metus lacinia, aliquam mi. Cras non laoreet odio. Suspendisse imperdiet ante sed purus iaculis ornare at ac erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque fringilla aliquet ipsum eget laoreet. Nulla vitae nisl nec tellus convallis posuere. Nullam felis nibh, hendrerit et ligula non, congue pulvinar ante. Donec dignissim mauris in erat ultrices, ac pretium turpis vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut diam mi, sollicitudin vitae dignissim ac, ornare a augue.
            </p>

            <Button
             startIcon={<OpenWith />}
             onClick={handleClick}
             variant="contained"
             color="warning"
             >
                Open Modal
            </Button>

        </Fragment>
    );

}

export default ModalPage;