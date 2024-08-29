
$(document).ready(function () {
    const buttons = [
        { text: 'My Account Details', icon: './assets/imgs/myAccountDetails.svg' },
        { text: 'Restaurants', icon: './assets/imgs/restaurants.svg' },
        { text: "Your Order's", icon: './assets/imgs/yourOrder.svg' },
        { text: 'Menu Color Setting', icon: './assets/imgs/menuColorSetting.svg' },
        { text: 'Menu', icon: './assets/imgs/menu.svg' },
        { text: "Order's", icon: './assets/imgs/order.svg' },
        { text: 'SMS', icon: './assets/imgs/sms.svg' },
        { text: 'Preferences', icon: './assets/imgs/preferences.svg' },
        { text: 'Pages', icon: './assets/imgs/pages.svg' },
        { text: 'Customers', icon: './assets/imgs/customers.svg' },
        { text: 'Floors Tables', icon: './assets/imgs/floorsTables.svg' },
        { text: 'Order Points', icon: './assets/imgs/orderPoint.svg' },
        { text: 'Coupons Vouchers', icon: './assets/imgs/couponsVouchers.svg' },
        { text: 'Manage SEO', icon: './assets/imgs/mnageSEO.svg' },
        { text: 'Receipt Tax', icon: './assets/imgs/receiptTax.svg' },
        { text: 'Invoices', icon: './assets/imgs/invoices.svg' },
        { text: 'Contact Queries', icon: './assets/imgs/contactQueries.svg' },
        { text: 'Miscellaneous', icon: './assets/imgs/miscellaneous.svg' }
    ];
    const sidebarContent = [
        [
            { url: '#', text: 'Account Info', icon: './assets/imgs/subMenu/accountInfo.png' },
            { url: '#', text: 'Change Password', icon: './assets/imgs/subMenu/changePassword.png' }
        ],
        [
            { url: '#', text: 'Restaurants List', icon: './assets/imgs/subMenu/restaurantsList.png' },
            { url: '#', text: 'Kitchen Line', icon: './assets/imgs/subMenu/kitchenLine.png'}
        ],
        [
            { url: '#', text: 'Order Now', icon: './assets/imgs/subMenu/orderNow.png' },
            { url: '#', text: 'Order List', icon: './assets/imgs/subMenu/orderList.png' }
        ],
        [
            { url: '#', text: 'Main Categories Color/sorting', icon: './assets/imgs/subMenu/mainCategories.png' },
            { url: '#', text: 'Sub categories Color/sorting', icon: './assets/imgs/subMenu/subCategories.png' },
            { url: '#', text: 'Items Color/sorting', icon: './assets/imgs/subMenu/ItemSorting.png' },
            { url: '#', text: 'Addon Color/sorting', icon: './assets/imgs/subMenu/AddonColorSorting.png' }
        ],
        [
            { url: '#', text: 'Upload PDF Menu', icon: './assets/imgs/subMenu/uploadMenu.png' },
            { url: '#', text: 'Add Menu', icon: './assets/imgs/subMenu/addMenu.png' },
            { url: '#', text: 'General Menu Description', icon: './assets/imgs/subMenu/generalMenuDescription.png' },
            { url: '#', text: 'EPOS Home Tab Setting', icon: './assets/imgs/subMenu/tabSetting.png' },
            { url: '#', text: 'Add Categories', icon: './assets/imgs/subMenu/addCategories.png' },
            { url: '#', text: 'Add Sub Categories', icon: './assets/imgs/subMenu/subCategories.png' },
            { url: '#', text: 'Add Items', icon: './assets/imgs/subMenu/addItem.png' },
            { url: '#', text: 'Add Addon Categories', icon: './assets/imgs/subMenu/addCategories.png' },
            { url: '#', text: 'Add Addon Items', icon: './assets/imgs/subMenu/addItem.png' },
            { url: '#', text: 'Update Apps Menu', icon: './assets/imgs/subMenu/editMenu.png' },
            { url: '#', text: 'Edit Menu Live', icon: './assets/imgs/subMenu/add-list.png' },
            { url: '#', text: 'Edit Addon Live', icon: './assets/imgs/subMenu/editAddon.png' },
            { url: '#', text: 'Category Print Sorting', icon: './assets/imgs/subMenu/categorySorting.png' },
        ],
        [
            { url: '#', text: 'Achive EPOS cash orders', icon: './assets/imgs/subMenu/cashOrders.png' },
            { url: '#', text: 'Order Print setting', icon: './assets/imgs/subMenu/printSetting.png' },
            { url: '#', text: 'Categories Name inline Print', icon: './assets/imgs/subMenu/categoriesPrint.png' },
            { url: '#', text: 'Online Orders by date', icon: './assets/imgs/subMenu/onlineOrders.png' },
        ],
        [
            { url: '#', text: 'Order sms Setting', icon: './assets/imgs/subMenu/smsSetting.png' },
            { url: '#', text: 'New Group', icon: './assets/imgs/subMenu/newGroup.png' },
            { url: '#', text: 'Group List', icon: './assets/imgs/subMenu/groupList.png' },
            { url: '#', text: 'SMS', icon: './assets/imgs/subMenu/sms.png' },
        ],
        [
            { url: '#', text: 'CarryBag Charge Setting', icon: './assets/imgs/subMenu/carryBagChargeSetting.png' },
            { url: '#', text: 'Manage Online Orders At', icon: './assets/imgs/subMenu/manageOnlineOrders.png' },
            { url: '#', text: 'Push Notiifcations Settings', icon: './assets/imgs/subMenu/notiifcationsSettings.png' },
            { url: '#', text: 'FB Pixel Settings', icon: './assets/imgs/subMenu/settings.png' },
            { url: '#', text: 'Terminal Settings', icon: './assets/imgs/subMenu/terminalSettings.png' },
            { url: '#', text: 'Deals / Offers', icon: './assets/imgs/subMenu/deal.png' },
            { url: '#', text: 'Order Comments', icon: './assets/imgs/subMenu/orderComments.png' },
            { url: '#', text: 'App Download', icon: './assets/imgs/subMenu/appDownload.png' },
            { url: '#', text: 'Delivery Charges Setting', icon: './assets/imgs/subMenu/settings.png' },
            { url: '#', text: 'Delivery Charges By Miles', icon: './assets/imgs/subMenu/deliveryMiles.png' },
            { url: '#', text: 'Delivery Charges By Postcode', icon: './assets/imgs/subMenu/zip-code.png' },
            { url: '#', text: 'Preorder Settings', icon: './assets/imgs/subMenu/settings.png' },
            { url: '#', text: 'Recipt Message / Logo Settings', icon: './assets/imgs/subMenu/settings.png' },
            { url: '#', text: 'Online order / Epos Print Settings', icon: './assets/imgs/subMenu/onlineOrders.png' },
            { url: '#', text: 'Receipt Print Font / Format Settings', icon: './assets/imgs/subMenu/receipt.png' },
            { url: '#', text: 'Order Discount Settings', icon: './assets/imgs/subMenu/discountSettings.png' },
            { url: '#', text: 'Hom Page Content', icon: './assets/imgs/subMenu/homPage.png' },
            { url: '#', text: 'Delivery Post Code', icon: './assets/imgs/subMenu/zip-code.png' },
            { url: '#', text: 'Shop Timing', icon: './assets/imgs/subMenu/shopTiming.png' },
            { url: '#', text: 'Online Order Opening', icon: './assets/imgs/subMenu/onlineOrders.png' },
            { url: '#', text: 'Order Takers', icon: './assets/imgs/subMenu/orderTakers.png' },
            { url: '#', text: 'Drivers', icon: './assets/imgs/subMenu/driver.png' },
        ],
        [
            { url: '#', text: 'List Pages', icon: './assets/imgs/subMenu/listPages.png' },
            { url: '#', text: 'Add Pages', icon: './assets/imgs/subMenu/addPages.png' },
            { url: '#', text: 'Terms & Conditions', icon: './assets/imgs/subMenu/terms-and-conditions.png' },
            { url: '#', text: 'Privacy Policy', icon: './assets/imgs/subMenu/terms-and-conditions.png' },
        ],
        [
            { url: '#', text: 'Customers List', icon: './assets/imgs/subMenu/customersList.png' },
            { url: '#', text: 'Add Customer', icon: './assets/imgs/subMenu/addCustomer.png' },
            { url: '#', text: 'Add Customer CSV', icon: './assets/imgs/subMenu/csv.png' },
            { url: '#', text: 'Customer Reviews', icon: './assets/imgs/subMenu/restaurantsList.png' },
        ],
        [
            { url: '#', text: 'Floors', icon: './assets/imgs/subMenu/floor.png' },
            { url: '#', text: 'Tables', icon: './assets/imgs/subMenu/table.png' },
        ],
        [
            { url: '#', text: 'Points Preferences', icon: './assets/imgs/subMenu/preference.png' },
            { url: '#', text: 'Points List', icon: './assets/imgs/subMenu/pointsList.png' },
            { url: '#', text: 'Add Points', icon: './assets/imgs/subMenu/add-point.png' },
        ],
        [
            { url: '#', text: 'Coupons List', icon: './assets/imgs/subMenu/couponsList.png' },
            { url: '#', text: 'Add Coupons', icon: './assets/imgs/subMenu/couponsList.png' },
            { url: '#', text: 'Shop Managers', icon: './assets/imgs/subMenu/shopManagers.png' },
        ],
        [
            { url: '#', text: 'SEO Tags', icon: './assets/imgs/subMenu/seo-tag.png' },
        ],
        [
            { url: '#', text: 'Tax List', icon: './assets/imgs/subMenu/taxList.png' },
        ],
        [
            { url: '#', text: 'Invoices List', icon: './assets/imgs/subMenu/invoice.png' },
            { url: '#', text: 'Invoices Summary', icon: './assets/imgs/subMenu/invoice.png' },
        ],
        [
            { url: '#', text: 'Contact Queries List', icon: './assets/imgs/subMenu/contactQueries.png' },
        ],
        [
            { url: '#', text: 'System Users', icon: './assets/imgs/subMenu/systemUsers.png' },
            { url: '#', text: 'Restaurant Gallery', icon: './assets/imgs/subMenu/gallery.png' },
            { url: '#', text: 'Log Out', icon: './assets/imgs/subMenu/exit.png' },
        ]
    ];

    const buttonsContainer = $('#buttons-container');
    const sidebarContentContainer = $('#sidebar-content-container');
    buttons.forEach((button, index) => {
        buttonsContainer.append(`
            <li>
                 <button class="icon-btn ${index === 0 ? 'active' : ''}" type="button" data-index="${index}">
                    <img src="${button.icon}" alt="icon" class="btn-icon">
                    ${button.text}
                </button>
            </li>
        `);
    });
    sidebarContent[0].forEach(item => {
        sidebarContentContainer.append(`
            <li>
                <a class="drop-list" href="${item.url}">
                    <img src="${item.icon}" alt="icon" class="menu-icon">
                    ${item.text}
                </a>
            </li>
        `);
    });
    
    $('.icon-btn').click(function () {
        const index = $(this).data('index');
        $('.icon-btn').removeClass('active');
        $(this).addClass('active');
        $('#sidebar-content-container').empty();
        sidebarContent[index].forEach(item => {
            $('#sidebar-content-container').append(`
                <li>
                    <a class="drop-list" href="${item.url}">
                        <img src="${item.icon}" alt="icon" class="menu-icon">
                        ${item.text}</a>
                </li>
            `);
        });
    });
});
